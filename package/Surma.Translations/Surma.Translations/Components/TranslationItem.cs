using Surma.Translations.Domain;

namespace Surma.Translations.Components;

public class TranslationItem
{
    public string Id { get; set; } = String.Empty;
    
    public string ResourceName { get; set; } = String.Empty;
    
    public string Name { get; set; } = String.Empty;
    
    public Dictionary<string, string?> Values { get; set; } = new();

    public Dictionary<string, string?> OriginalValues { get; set; } = new();
    
    public bool IsDirty { get; set; }
    
    public string? GetCultureValue(string cultureName)
    {
        return Values.GetValueOrDefault(cultureName);
    }
    
    public void SetCultureValue(string cultureName, string? value)
    {
        IsDirty = true;
        Values[cultureName] = value;
    }
    
    
    
    public bool AreValuesDirty()
    {
        var countMatched = Values.Count == OriginalValues.Count;
        
        if(!countMatched)
        {
            return true;
        }
        
        foreach (var (key, value) in Values)
        {
            if (!OriginalValues.TryGetValue(key, out var originalValue))
            {
                return true;
            }
            
            if (value != originalValue)
            {
                return true;
            }
        }

        return false;
    }
    
    public TranslationInput ToTranslationInput()
    {
        return new TranslationInput
        {
            Id = Id,
            ResourceName = ResourceName,
            Name = Name,
            Values = Values
        };
    }
}