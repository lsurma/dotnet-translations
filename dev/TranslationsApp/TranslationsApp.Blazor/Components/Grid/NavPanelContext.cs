namespace TranslationsApp.Blazor.Components.Grid;

public class NavPanelContext
{
    public string RefreshKey { get; set; } = Guid.NewGuid().ToString();

    public IList<NavPanelAction> Actions { get; set; } = new List<NavPanelAction>();

    public Func<Task>? StateHasChangedCallback { get; set; }
    
    public Task StateHasChanged()
    {
        return StateHasChangedCallback is not null ? StateHasChangedCallback() : Task.CompletedTask;
    }
    
    public Task MutateAsync(Action<NavPanelContext> mutation)
    {
        mutation(this);
        return StateHasChanged();
    }
}