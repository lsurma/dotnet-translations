using System.Linq.Expressions;

namespace Surma.Translations.Domain;

public class GetTranslationsArgs
{
    public string PartitionKey { get; set; } = "LearningStore";
    
    public string? Filter { get; set; } = String.Empty;
    
    public int Limit { get; set; } = 500;
}