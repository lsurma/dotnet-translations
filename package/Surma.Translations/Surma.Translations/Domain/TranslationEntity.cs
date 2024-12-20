﻿using System.Text.Json;
using Azure;
using Azure.Data.Tables;

namespace Surma.Translations.Domain;

public class TranslationEntity
{
    public TranslationEntity()
    {
        
    }

    public string Id { get; set; } = String.Empty;
    
    public string ResourceName { get; set; } = String.Empty;
    
    public string Name { get; set; } = String.Empty;
    
    public string? Values { get; set; } = String.Empty;
    
    public DateTimeOffset? ModifiedAt { get; set; }
    
    public bool IsDeleted { get; set; }
    
    public void SetValues(Dictionary<string, string?> values)
    {
        Values = JsonSerializer.Serialize(values);
    }
    
    public Dictionary<string, string?>? GetValues()
    {
        return JsonSerializer.Deserialize<Dictionary<string, string?>>(String.IsNullOrWhiteSpace(Values) ? "{}" : Values);
    }
}
