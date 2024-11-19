using Azure;
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

    public async Task<SaveTranslationsResult> SaveTranslationsAsync(
        IEnumerable<TranslationInput> translations,
        CancellationToken cancellationToken = default
    )
    {
        translations = translations.ToList();
        var tableClient = await GetOrCreateTableClientAsync(cancellationToken);
        var operationsPerBatchCount = 3;
        var batches = translations
            .Select((t, i) => (t, i))
            .GroupBy(x => x.i / operationsPerBatchCount)
            .Select(g => g.Select(x => x.t).ToList())
            .ToList();

        var responses = new List<Response>();
        
        foreach (var operationsInBatch in batches)
        {
            var actions = new List<TableTransactionAction>();
            
            foreach (var translation in operationsInBatch)
            {
                var existingEntity = Entities.FirstOrDefault(e => e.RowKey == translation.Id);
                var targetEntity = existingEntity ?? new TranslationEntity();
                
                targetEntity.PartitionKey = existingEntity?.PartitionKey ?? "LearningStore";
                targetEntity.RowKey = existingEntity?.RowKey ?? translation.Id;
                targetEntity.ResourceName = translation.ResourceName;
                targetEntity.Name = translation.Name;
                targetEntity.SetValues(translation.Values);

                actions.Add(existingEntity != null 
                    ? new TableTransactionAction(TableTransactionActionType.UpdateMerge, targetEntity, existingEntity.ETag) 
                    : new TableTransactionAction(TableTransactionActionType.Add, targetEntity)
                );
            }
            
            var transactionResponses = await tableClient.SubmitTransactionAsync(actions, cancellationToken);
            responses.AddRange(transactionResponses.Value);
        }

        var errors = responses.Where(r => r.IsError).Select(r => r.ReasonPhrase).ToList();
        
        return new SaveTranslationsResult(translations.Count(), translations.Count() - errors.Count, errors);
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
    
    public record SaveTranslationsResult(int TotalCount, int SuccessCount, IEnumerable<string> Errors)
    {
        public bool IsSuccess => TotalCount == SuccessCount;
    }
}