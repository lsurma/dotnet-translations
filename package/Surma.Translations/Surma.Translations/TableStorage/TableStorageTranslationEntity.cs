﻿using System.Text.Json;
using Azure;
using Azure.Data.Tables;

namespace Surma.Translations.TableStorage;

public class TableStorageTranslationEntity : ITableEntity
{
    public string PartitionKey { get; set; }
    
    public string RowKey { get; set; }
    
    public string ResourceName { get; set; } = String.Empty;
    
    public string Name { get; set; } = String.Empty;
    
    public string? Values { get; set; } = String.Empty;
    
    public bool IsDeleted { get; set; }
    
    public DateTimeOffset? Timestamp { get; set; }
    
    public ETag ETag { get; set; }
    
    public void SetValues(Dictionary<string, string?> values)
    {
        Values = JsonSerializer.Serialize(values);
    }
    
    public Dictionary<string, string?>? GetValues()
    {
        return JsonSerializer.Deserialize<Dictionary<string, string?>>(String.IsNullOrWhiteSpace(Values) ? "{}" : Values);
    }
}