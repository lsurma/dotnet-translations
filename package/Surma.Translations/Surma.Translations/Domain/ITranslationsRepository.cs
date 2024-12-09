namespace Surma.Translations.Domain;

public interface ITranslationsRepository
{
    Task<IEnumerable<TranslationEntity>> GetListAsync(CancellationToken cancellationToken);
    
    Task<IEnumerable<TranslationEntity>> GetListAsync(IEnumerable<string> ids, CancellationToken cancellationToken);

    Task<SaveTranslationsResult> SaveAsync(IEnumerable<TranslationInput> translations, CancellationToken cancellationToken);
}       