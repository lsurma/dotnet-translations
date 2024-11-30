using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace TranslationsApp.Blazor.Components.Grid;

public class NavPanelAction
{
    public string Key { get; set; }
    
    public string Text { get; set; }
    
    public EventCallback<MouseEventArgs> OnClick { get; set; }
    
    public bool InProgress { get; set; }
}