using Azure.Data.Tables;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace Surma.Translations.Domain;

public class TranslationsManager
{
    public IOptions<TranslationAppOptions> OptionsProvider { get; }
    
    public TranslationAppOptions Options => OptionsProvider.Value;
    
    protected TableClient? TableClient { get; set; }
    
    public TranslationsManager(
        IOptions<TranslationAppOptions> optionsProvider    
    )
    {
        OptionsProvider = optionsProvider;
    }

    public async Task SeedRandomAsync()
    {
        var tableClient = await GetOrCreateTableClientAsync();
        var translationEntity = new TranslationEntity(new Dictionary<string, string?>
        {
            ["en-US"] = "Hello",
            ["de-DE"] = "Hallo"
        })
        {
            PartitionKey = "Translation",
            RowKey = Guid.NewGuid().ToString(),
            ResourceName = "ResourceName",
            Name = "Name",
        };
        
        await tableClient.AddEntityAsync(translationEntity);
    }
    
    public async Task<IEnumerable<TranslationEntity>> GetTranslationsAsync(CancellationToken cancellationToken = default)
    {
        var tableClient = await GetOrCreateTableClientAsync(cancellationToken);
        var translations = new List<TranslationEntity>();
        
        await foreach (var translationEntity in tableClient.QueryAsync<TranslationEntity>(cancellationToken: cancellationToken))
        {
            translations.Add(translationEntity);
        }
        
        return translations;
    }
    
    protected async Task<TableClient> GetOrCreateTableClientAsync(CancellationToken cancellationToken = default)
    {
        if (TableClient is not null)
        {
            return TableClient;
        }
        
        TableClient = await CreateTableClientAsync(cancellationToken);
        return TableClient;
    }
    
    protected async Task<TableClient> CreateTableClientAsync(CancellationToken cancellationToken = default)
    {
        var tableClient = new TableClient(Options.ConnectionString, Options.TableName);
        await tableClient.CreateIfNotExistsAsync(cancellationToken);
        return tableClient;
    }
}