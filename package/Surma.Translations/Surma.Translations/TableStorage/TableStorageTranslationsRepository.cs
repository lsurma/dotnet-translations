using System.Linq.Expressions;
using Azure;
using Azure.Data.Tables;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Surma.Translations.Domain;

namespace Surma.Translations.TableStorage;

public class TableStorageTranslationsRepository : ITranslationsRepository
{
    protected TableClient? TableClient { get; set; }

    protected IOptions<TranslationAppOptions> OptionsProvider { get; }
    
    protected ILogger<TableStorageTranslationsRepository> Logger { get; }

    protected TranslationAppOptions Options => OptionsProvider.Value;
    
    protected List<TableStorageTranslationEntity> Entities { get; } = new();

    public TableStorageTranslationsRepository(
        IOptions<TranslationAppOptions> optionsProvider,
        ILogger<TableStorageTranslationsRepository> logger
    )
    {
        OptionsProvider = optionsProvider;
        Logger = logger;
    }
    
    public async Task<IEnumerable<TranslationEntity>> GetListAsync(CancellationToken cancellationToken)
    {
        var tableClient = await GetOrCreateTableClientAsync(cancellationToken);
        Entities.Clear();
        
        var results = tableClient.QueryAsync<TableStorageTranslationEntity>(
            maxPerPage: 500,
            cancellationToken: cancellationToken
        );
        
        await foreach (var entity in results)
        {
            Entities.Add(entity);
        }
        
        return ToTranslationEntities(Entities);
    }
    
    public async Task<IEnumerable<TranslationEntity>> GetListAsync(IEnumerable<string> ids, CancellationToken cancellationToken)
    {
        var tableClient = await GetOrCreateTableClientAsync(cancellationToken);
        var entities = new List<TranslationEntity>();
        
        foreach (var id in ids)
        {
            var entity = await tableClient.GetEntityAsync<TableStorageTranslationEntity>("LearningStore", id, null, cancellationToken);

            // Find existing entity index and replace it
            var existingEntityIndex = Entities.FindIndex(e => e.RowKey == id);
            if (existingEntityIndex >= 0)
            {
                Entities[existingEntityIndex] = entity;
            }
            else
            {
                Entities.Add(entity);
            }
            
            entities.Add(ToTranslationEntity(entity));
        }
        
        return entities;
    }
    
    public async Task<SaveTranslationsResult> SaveAsync(IEnumerable<TranslationInput> translations, CancellationToken cancellationToken)
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
                var targetEntity = existingEntity ?? new TableStorageTranslationEntity();
                
                targetEntity.PartitionKey = existingEntity?.PartitionKey ?? "LearningStore";
                targetEntity.RowKey = existingEntity?.RowKey ?? translation.Id;
                targetEntity.ResourceName = translation.ResourceName;
                targetEntity.Name = translation.Name;
                targetEntity.IsDeleted = translation.IsDeleted;
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
    
    protected TranslationEntity ToTranslationEntity(TableStorageTranslationEntity entity)
    {
        return new TranslationEntity
        {
            Id = entity.RowKey,
            ResourceName = entity.ResourceName,
            Name = entity.Name,
            Values = entity.Values,
            ModifiedAt = entity.Timestamp,
            IsDeleted = entity.IsDeleted
        };
    }
    
    protected IEnumerable<TranslationEntity> ToTranslationEntities(IEnumerable<TableStorageTranslationEntity> entities)
    {
        return entities.Select(ToTranslationEntity);
    }
}