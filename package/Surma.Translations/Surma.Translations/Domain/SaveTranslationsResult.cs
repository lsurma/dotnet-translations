namespace Surma.Translations.Domain;

public record SaveTranslationsResult(int TotalCount, int SuccessCount, IEnumerable<string> Errors)
{
    public bool IsSuccess => TotalCount == SuccessCount;
}
