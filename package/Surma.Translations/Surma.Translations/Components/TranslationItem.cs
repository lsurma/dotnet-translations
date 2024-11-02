namespace Surma.Translations.Components;

public class TranslationItem
{
    public string Id { get; set; } = String.Empty;
    
    public string CultureName { get; set; } = String.Empty;
    
    public string ResourceName { get; set; } = String.Empty;
    
    public string Name { get; set; } = String.Empty;
    
    public Dictionary<string, string> Values { get; set; } = new();
    
    public bool IsDirty { get; set; }
    
    public string? GetCultureValue(string cultureName)
    {
        return Values.GetValueOrDefault(cultureName);
    }
    
    public void SetCultureValue(string cultureName, string value)
    {
        IsDirty = true;
        Values[cultureName] = value;
    }
}