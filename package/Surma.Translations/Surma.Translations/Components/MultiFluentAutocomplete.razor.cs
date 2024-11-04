using Microsoft.AspNetCore.Components;
using Microsoft.FluentUI.AspNetCore.Components;

namespace Surma.Translations.Components;

public partial class MultiFluentAutocomplete<TOption> : FluentAutocomplete<TOption> where TOption : notnull
{
    public override Task SetParametersAsync(ParameterView parameters)
    {
        var selectedOptions = parameters.GetValueOrDefault<IEnumerable<TOption>>(nameof(base.SelectedOptions));
        
        if(selectedOptions != null && !Equals(selectedOptions, _selectedOptions))
        {
            _selectedOptions = [.. selectedOptions];
        }
        
        return base.SetParametersAsync(parameters);
    }

    protected override async Task RaiseChangedEventsAsync()
    {
        if (Multiple)
        {
            if (SelectedOptionsChanged.HasDelegate)
            {
                await SelectedOptionsChanged.InvokeAsync(_selectedOptions);
            }
        }
        else
        {
            if (SelectedOptionChanged.HasDelegate)
            {
                await SelectedOptionChanged.InvokeAsync(SelectedOption);
            }
        }
    }
}