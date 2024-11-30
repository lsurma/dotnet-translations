using System.Diagnostics.Tracing;
using Azure.Core.Diagnostics;

namespace TranslationsApp.Blazor;

public static class AzureLogger
{
    public static AzureEventSourceListener CreateConsoleLogger
    (
        ILogger logger,
        EventLevel level = EventLevel.Informational
    )
    {
        return new AzureEventSourceListener(
            (eventData, text) => logger.LogInformation("Azure {Name} {Level} {Text}", eventData.EventSource.Name, eventData.Level, text), 
            level
        );

        return new AzureEventSourceListener((eventData, text) => Console.WriteLine("[{1}] {0}: {2}", eventData.EventSource.Name, eventData.Level, text), level);
    }
}