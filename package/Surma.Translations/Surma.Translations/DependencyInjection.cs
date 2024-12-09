using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Surma.Translations.Domain;
using Surma.Translations.TableStorage;

namespace Surma.Translations;

public static class DependencyInjection
{
    public static IServiceCollection AddTranslationsApp(
        this IServiceCollection services,
        string? configurationSection = null
    )
    {
        services.AddScoped<TranslationsManager>();
        services.AddScoped<ITranslationsRepository, TableStorageTranslationsRepository>();
        
        if(configurationSection != null)
        {
            services.AddOptions<TranslationAppOptions>().Configure<IConfiguration>((options, configuration) => {
                configuration.GetSection(configurationSection).Bind(options);
            });
        }
        
        return services;
    }
}