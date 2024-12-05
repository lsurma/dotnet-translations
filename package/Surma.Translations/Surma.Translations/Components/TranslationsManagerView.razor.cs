using System.Collections.Immutable;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.FluentUI.AspNetCore.Components;
using Microsoft.FluentUI.AspNetCore.Components.Utilities.InternalDebounce;
using Surma.Translations.Domain;

namespace Surma.Translations.Components;

public partial class TranslationsManagerView : ComponentBase
{
    [Inject]
    public IDialogService DialogService { get; set; } = default!;
    
    [Inject]
    public TranslationsManager TranslationsManager { get; set; } = default!;
    
    [Inject]
    public ILogger<TranslationsManagerView> Logger { get; set; } = default!;
    
    [Inject]
    public IOptions<TranslationAppOptions> OptionsProvider { get; set; } = default!;
    
    public TranslationAppOptions Options => OptionsProvider.Value;
    
    public List<TranslationItem> AvailableTranslationItems { get; set; } = new();
        
    public List<TranslationItem> Translations { get; set; } = new();

    public IQueryable<TranslationItem> QueryableTranslations { get; set; } = (new List<TranslationItem>()).AsQueryable();
    
    public IEnumerable<TranslationItem> SelectedTranslations { get; set; } = new List<TranslationItem>();

    public IEnumerable<string> AvailableCultureNames { get; set; } = ["pl-PL", "en-US", "de-DE", "fr-FR", "es-ES", "it-IT"];

    public IEnumerable<string> SelectedCultureNames { get; set; } = new List<string>();

    public string? SelectedReferenceCulture { get; set; }
    
    public string? Search { get; set; }
    
    public int MaxItemsToFetch { get; set; } = 100;
    
    public Dictionary<string, string?> Filters { get; set; } = new();

    public int DirtyItemsCount { get; set; } = 0;
    
    public int SelectedSoftDeletableItemsCount { get; set; } = 0;

    public int SelectedDeletedReversibleItemsCount { get; set; } = 0;

    public bool LoadingInProgress { get; set; } = false;

    public bool SaveInProgress { get; set; } = false;
    
    public bool AnyInProgress => LoadingInProgress || SaveInProgress;

    protected DebounceAction SearchDebounceAction { get; set; } = new();
    
    protected void SetItems(List<TranslationItem> items, bool replace = true, bool setAvailableItems = false)
    {
        if(replace)
        {
            Translations = items;
        }
        else
        {
            // Find items from arg and replace them in the list
            foreach (var item in items)
            {
                var index = Translations.FindIndex(x => x.Id == item.Id);
                
                if(index >= 0)
                {
                    Translations[index] = item;
                }
            }
        }
        
        QueryableTranslations = Translations.AsQueryable();
        AvailableTranslationItems = setAvailableItems ? Translations : AvailableTranslationItems;
        
        SetDirtyItemsCount();
        StateHasChanged();
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
    
    private async Task SaveDataAsync()
    {
        await HandleAsync(async () => {
            var confirmed = await ConfirmAsync(true);
            
            if(!confirmed)
            {
                return Task.CompletedTask;
            }

            SaveInProgress = true;
            StateHasChanged();
            
            await Task.Delay(5000);
            var dirtyItemsToUpdateOrCreate = Translations.Where(x => x.AreValuesDirty()).Select(x => x.ToTranslationInput()).ToList();
            var saveResult = await TranslationsManager.SaveTranslationsAsync(dirtyItemsToUpdateOrCreate);
            var dirtyIds = dirtyItemsToUpdateOrCreate.Select(x => x.Id).ToList();
            await LoadAndSetItemsAsync(dirtyIds);
            
            if(saveResult is { IsSuccess: true, TotalCount: > 0 })
            {
                await DialogService.ShowSuccessAsync("Translations saved successfully");
            }
            else if( saveResult is { IsSuccess: true, TotalCount: 0 })
            {
                await DialogService.ShowWarningAsync("There was no changes to save");
            }
            else if(saveResult is { IsSuccess: false })
            {
                var errors = String.Join(", ", saveResult.Errors);
                
                if(saveResult.SuccessCount > 0)
                {
                    await DialogService.ShowWarningAsync(errors, $"Some translations failed to save.");
                }
                else
                {
                    await DialogService.ShowErrorAsync(errors, "Translations save failed");
                }
            }
            
            return Task.CompletedTask;
        });
        SaveInProgress = false;
    }
    
    private async Task LoadDataAsync()
    {
        await HandleAsync(async () => {
            var confirmed = await ConfirmAsync(false);

            if (!confirmed)
            {
                return Task.CompletedTask;
            }

            LoadingInProgress = true;
            await LoadAndSetItemsAsync();
            return Task.CompletedTask;
        });
        
        LoadingInProgress = false;
    }

    private async Task LoadAndSetItemsAsync(
        List<string>? ids = null    
    )
    {
        var translations = ids == null 
            ? await TranslationsManager.GetTranslationsAsync() 
            : await TranslationsManager.GetTranslationsAsync(ids);
        
        var asItems = translations.Select(x => new TranslationItem
        {
            Id = x.RowKey,
            ResourceName = x.ResourceName,
            Name = x.Name,
            Values = x.GetValues() ?? new Dictionary<string, string?>(),
            OriginalValues = x.GetValues() ?? new Dictionary<string, string?>(),
        }).ToList();

        // When ids == null, it means we are loading all items and we replace all existing items
        // otherwise we update only items with ids from the list
        SetItems(asItems, ids == null, true);
    }
    
    private bool IsColumnFiltered(string columnName)
    {
        var value = Filters.GetValueOrDefault(columnName);
        return !String.IsNullOrWhiteSpace(value);
    }

    private void FilterColumns()
    {
        var availableItems = AvailableTranslationItems;
        IEnumerable<TranslationItem> newItems =  [..availableItems];
        List<string> commonTypes = ([
            nameof(TranslationItem.Id), 
            nameof(TranslationItem.ResourceName), 
            nameof(TranslationItem.Name)
        ]);

        if (!String.IsNullOrWhiteSpace(Search))
        {
            newItems = newItems.Where(x => 
                x.Values.Values.Any(v => v?.Contains(Search!, StringComparison.OrdinalIgnoreCase) ?? false) ||
                x.Id.Contains(Search!, StringComparison.OrdinalIgnoreCase) ||
                x.ResourceName.Contains(Search!, StringComparison.OrdinalIgnoreCase) ||
                x.Name.Contains(Search!, StringComparison.OrdinalIgnoreCase)
            );
        }
        
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
    
    private void SetSearchFilter(bool debounce = true)
    {
        // Create debounce action
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

    private async Task<bool> ConfirmAsync(bool saveChangesConfirmation)
    {
        SetDirtyItemsCount();
        
        if(DirtyItemsCount <= 0)
        {
            return true;
        }
        
        var dialog = !saveChangesConfirmation 
            ? await DialogService.ShowConfirmationAsync("There are unsaved changes. Are you sure?")
            : await DialogService.ShowConfirmationAsync($"You are about to save {DirtyItemsCount} changes. Are you sure?");
        
        var result = await dialog.Result;
        
        return !result.Cancelled;
    }

    private async Task HandleAsync<T>(
        Func<Task<T>> handler 
    )
    {
        try
        {
            await handler();
        }
        catch (Exception e)
        {
            await HandleExceptionAsync(e);
        }
    }
    
    private async Task HandleExceptionAsync(Exception e)
    {
        Logger.LogError(e, "Exception {Message}", e.Message);
        await DialogService.ShowErrorAsync(e.ToString(), e.Message);
    }
    
    private Task SearchChanged(string search)
    {
        Search = search;
        SetSearchFilter();
        return Task.CompletedTask;
    }
    
    private async Task OpenTranslationEditorPanelAsync(TranslationItem arg)
    {
        var data = new TranslationEditorModel();
        var editorDialog = await DialogService.ShowPanelAsync<TranslationEditorPanel>(
            data, 
            new DialogParameters()
            {
                Alignment = HorizontalAlignment.Right,
                Modal = true,
                PreventDismissOnOverlayClick = true
            }
        );
        var result = await editorDialog.Result;
    }
    
    private Task SelectedTranslationsChanged(IEnumerable<TranslationItem> arg)
    {
        SelectedTranslations = arg;
        return Task.CompletedTask;
    }
}