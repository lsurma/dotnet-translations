using System.Collections.Immutable;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.FluentUI.AspNetCore.Components;
using Surma.Translations.Domain;

namespace Surma.Translations.Components;

public partial class TranslationsManagerView : ComponentBase
{
    [Inject]
    public IDialogService DialogService { get; set; } = default!;
    
    [Inject]
    public TranslationsManager TranslationsManager { get; set; } = default!;
    
    public MultiFluentAutocomplete<string>? Autocomplete { get; set; }

    public List<TranslationItem> AvailableTranslationItems { get; set; } = new();
        
    public List<TranslationItem> Translations { get; set; } = new();

    public IQueryable<TranslationItem> QueryableTranslations { get; set; } = (new List<TranslationItem>()).AsQueryable();
    
    public IEnumerable<TranslationItem> SelectedTranslations { get; set; } = new List<TranslationItem>();

    public IEnumerable<string> AvailableCultureNames { get; set; } = ["pl-PL", "en-US", "de-DE", "fr-FR", "es-ES", "it-IT"];

    public IEnumerable<string> SelectedCultureNames { get; set; } = new List<string>();

    public string? SelectedReferenceCulture { get; set; }
    
    public string? Search { get; set; }
    
    public Dictionary<string, string?> Filters { get; set; } = new();

    public int DirtyItemsCount { get; set; } = 0;
    
    protected void SetItems(List<TranslationItem> items)
    {
        Translations = items;
        QueryableTranslations = items.AsQueryable();
    }
    
    protected void SetRandomItems()
    {
        var items = new List<TranslationItem>();
        var random = new Random();
        for (var i = 0; i < 100; i++)
        {
            items.Add(new TranslationItem
            {
                Id = Guid.NewGuid().ToString(),
                ResourceName = "Resource",
                Name = $"Name {i}",
            });
        }
        
        AvailableTranslationItems = items;
        SetItems(items);
    }
    
    private void SelectedCulturesChanged(IEnumerable<string>? newValue)
    {
        SelectedCultureNames = newValue ?? new List<string>();
    }
    
    private void SetSelectedReferenceCulture(IEnumerable<string>? newValue)
    {
        SelectedReferenceCulture = newValue?.FirstOrDefault();
    }
    
    private bool IsCultureSelectedAsReferenceCulture(string cultureName)
    {
        return SelectedReferenceCulture == cultureName;
    }
    
    private Task SaveDataAsync()
    {
        try
        {
            return TranslationsManager.SeedRandomAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
        
        return Task.CompletedTask;
    }
    
    private async Task LoadDataAsync()
    {
        var confirmed = await ConfirmAsync();

        if (confirmed)
        {
            var translations = await TranslationsManager.GetTranslationsAsync();
            SetItems(translations.Select(x => new TranslationItem
            {
                Id = x.RowKey,
                ResourceName = x.ResourceName,
                Name = x.Name,
                Values = x.GetValues() ?? new Dictionary<string, string?>(),
                OriginalValues = x.GetValues() ?? new Dictionary<string, string?>(),
            }).ToList());
        }
    }
    
    private bool IsColumnFiltered(string columnName)
    {
        var value = Filters.GetValueOrDefault(columnName);
        return !String.IsNullOrWhiteSpace(value);
    }

    private void FilterColumns()
    {
        var availableItems = AvailableTranslationItems;
        var newItems = availableItems.AsEnumerable();
        List<string> commonTypes = ([
            nameof(TranslationItem.Id), 
            nameof(TranslationItem.ResourceName), 
            nameof(TranslationItem.Name)
        ]);
        
        foreach (var (key, value) in Filters)
        {
            var isValueFilter = !commonTypes.Contains(key);
            var hasValue = !String.IsNullOrWhiteSpace(value);

            if (!hasValue)
            {
                continue;
            }
            
            if (isValueFilter)
            {
                newItems = newItems.Where(x => x.Values.GetValueOrDefault(key)?.Contains(value!, StringComparison.OrdinalIgnoreCase) ?? false);
            }
            else
            {
                newItems = key switch
                {
                    nameof(TranslationItem.Id) => newItems.Where(x => x.Id.Contains(value!, StringComparison.OrdinalIgnoreCase)),
                    nameof(TranslationItem.ResourceName) => newItems.Where(x => x.ResourceName.Contains(value!, StringComparison.OrdinalIgnoreCase)),
                    nameof(TranslationItem.Name) => newItems.Where(x => x.Name.Contains(value!, StringComparison.OrdinalIgnoreCase)),
                    _ => newItems
                };
            }
        }
        
        SetItems(newItems.ToList());
    }
    
    private void SetColumnFilter(string columnName, string? value)
    {
        Filters[columnName] = value;
        FilterColumns();
    }

    private void SetDirtyItemsCount()
    {
        DirtyItemsCount = Translations.Count(x => x.AreValuesDirty());
    }
    
    private void SetItemValue(TranslationItem item, string cultureName, string? value)
    {
        item.SetCultureValue(cultureName, value);
        SetDirtyItemsCount();
    }

    private async Task<bool> ConfirmAsync()
    {
        SetDirtyItemsCount();
        
        if(DirtyItemsCount <= 0)
        {
            return true;
        }
        
        var dialog = await DialogService.ShowConfirmationAsync("There are unsaved changes. Are you sure?");
        var result = await dialog.Result;
        
        return !result.Cancelled;
        
    }
}