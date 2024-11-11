using System.Text.Json;
using Azure;
using Azure.Data.Tables;

namespace Surma.Translations.Domain;

public class TranslationEntity : EntityBase
{
    public TranslationEntity()
    {
        
    }

    public TranslationEntity(Dictionary<string, string?> values)
    {
        SetValues(values);
    }
    
    public string ResourceName { get; set; } = String.Empty;
    
    public string Name { get; set; } = String.Empty;
    
    public string? Values { get; set; } = String.Empty;
    
    public void SetValues(Dictionary<string, string?> values)
    {
        Values = JsonSerializer.Serialize(values);
    }
    
    public Dictionary<string, string?>? GetValues()
    {
        return JsonSerializer.Deserialize<Dictionary<string, string?>>(String.IsNullOrWhiteSpace(Values) ? "{}" : Values);
    }
}

public class EntityBase : ITableEntity
{
    public string PartitionKey { get; set; }
    
    public string RowKey { get; set; }
    
    public DateTimeOffset? Timestamp { get; set; }
    
    public ETag ETag { get; set; }
}