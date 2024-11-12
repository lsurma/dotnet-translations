using Azure.Data.Tables;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace Surma.Translations.Domain;

public class TranslationsManager
{
    public IOptions<TranslationAppOptions> OptionsProvider { get; }
    
    public TranslationAppOptions Options => OptionsProvider.Value;
    
    protected TableClient? TableClient { get; set; }
    
    protected List<TranslationEntity> Entities { get; } = new();
    
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

    public async Task<bool> SaveTranslationsAsync(
        IEnumerable<TranslationInput> translations,
        CancellationToken cancellationToken = default
    )
    {
        var tableClient = await GetOrCreateTableClientAsync(cancellationToken);
        var actions = new List<TableTransactionAction>();
        
        foreach (var translation in translations)
        {
            var existingEntity = Entities.FirstOrDefault(e => e.RowKey == translation.Id);

            if (existingEntity != null)
            {
                // Update
                existingEntity.ResourceName = translation.ResourceName;
                existingEntity.Name = translation.Name;
                existingEntity.SetValues(translation.Values);
                actions.Add(new TableTransactionAction(TableTransactionActionType.UpdateMerge, existingEntity, existingEntity.ETag));
            }
        }
        
        var res = await tableClient.SubmitTransactionAsync(actions, cancellationToken);
        
        return true;
    }
    
    public async Task<IEnumerable<TranslationEntity>> GetTranslationsAsync(CancellationToken cancellationToken = default)
    {
        var tableClient = await GetOrCreateTableClientAsync(cancellationToken);
        Entities.Clear();
        
        await foreach (var translationEntity in tableClient.QueryAsync<TranslationEntity>(cancellationToken: cancellationToken))
        {
            Entities.Add(translationEntity);
        }
        
        return Entities;
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