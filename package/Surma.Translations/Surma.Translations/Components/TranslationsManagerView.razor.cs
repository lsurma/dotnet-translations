﻿using System.Collections.Immutable;
using Microsoft.AspNetCore.Components;
using Microsoft.FluentUI.AspNetCore.Components;

namespace Surma.Translations.Components;

public partial class TranslationsManagerView : ComponentBase
{
    public MultiFluentAutocomplete<string>? Autocomplete { get; set; }
    
    public List<TranslationItem> Translations { get; set; } = new();

    public IQueryable<TranslationItem> QueryableTranslations { get; set; } = (new List<TranslationItem>()).AsQueryable();
    
    public IEnumerable<TranslationItem> SelectedTranslations { get; set; } = new List<TranslationItem>();

    public IEnumerable<string> AvailableCultureNames { get; set; } = ["pl-PL", "en-US", "de-DE", "fr-FR", "es-ES", "it-IT"];

    public IEnumerable<string> SelectedCultureNames { get; set; } = new List<string>();

    public string? SelectedReferenceCulture { get; set; }
    
    public bool IdColumnVisible { get; set; } = true;
    
    public string? Search { get; set; }
    
    protected override void OnInitialized()
    {
        SetRandomItems();
        base.OnInitialized();
    }
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
                CultureName = "en",
                ResourceName = "Resource",
                Name = $"Name {i}",
            });
        }
        
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
    
    private void OnSubmitSettings()
    {
        SelectedReferenceCulture = "de-DE";
    }
}