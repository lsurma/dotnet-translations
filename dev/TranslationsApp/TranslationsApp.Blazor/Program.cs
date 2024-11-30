using System.Diagnostics.Tracing;
using Azure.Core.Diagnostics;
using Microsoft.FluentUI.AspNetCore.Components;
using Microsoft.JSInterop;
using Surma.Translations.Domain;
using TranslationsApp.Blazor;
using TranslationsApp.Blazor.Components;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();
builder.Services.AddFluentUIComponents();

builder.Services.AddOptions<TranslationAppOptions>().Configure<IConfiguration>((options, configuration) => {
    configuration.GetSection("TranslationApp").Bind(options);
});

builder.Services.AddScoped<TranslationsManager>();
var app = builder.Build();

AzureLogger.CreateConsoleLogger(app.Logger, EventLevel.Informational);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();