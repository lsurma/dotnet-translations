using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Surma.Translations.Domain;

public class TranslationsManager
{
    public ILogger<TranslationsManager> Logger { get; }
    public ITranslationsRepository TranslationsRepository { get; }

    public TranslationsManager(
        ILogger<TranslationsManager> logger,
        ITranslationsRepository translationsRepository
    )
    {
        Logger = logger;
        TranslationsRepository = translationsRepository;
    }

    public Task<SaveTranslationsResult> SaveTranslationsAsync(
        IEnumerable<TranslationInput> translations,
        CancellationToken cancellationToken = default
    )
    {
        return TranslationsRepository.SaveAsync(translations, cancellationToken);
    }
    
    public Task<IEnumerable<TranslationEntity>> GetTranslationsAsync(
        CancellationToken cancellationToken = default)
    {
        return TranslationsRepository.GetListAsync(cancellationToken);
    }
    
    public async Task<IEnumerable<TranslationEntity>> GetTranslationsAsync(
        IEnumerable<string> ids,
        CancellationToken cancellationToken = default
    )
    {
        return await TranslationsRepository.GetListAsync(ids, cancellationToken);
    }
}