using Surma.Translations.Components;

namespace Surma.Translations.Domain;

public class TranslationInput
{
    public string Id { get; set; } = String.Empty;
    
    public string ResourceName { get; set; } = String.Empty;
    
    public string Name { get; set; } = String.Empty;
    
    public bool IsDeleted { get; set; }
    
    public Dictionary<string, string?> Values { get; set; } = new();
}