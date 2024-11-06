import {Button, CompoundButton, CompoundButtonDefinition, ButtonDefinition} from '@fluentui/web-components';
import { FluentDesignSystem } from '@fluentui/web-components';
import { FASTElement } from '@microsoft/fast-element';
import { setTheme } from '@fluentui/web-components';
import { webLightTheme } from '@fluentui/tokens';

setTheme(webLightTheme);


export class CustomFluentCompoundButton extends CompoundButton {
    constructor() {
        super();
    }
    }

FluentDesignSystem.registry.define('custom-button', Button);

    
// FASTElement.compose(CustomButton, {
//     ...ButtonDefinition,
//     name: 'custom-button',
// });
// FluentDesignSystem.registry.define('custom-button', CustomButton);

FASTElement.compose(CustomFluentCompoundButton, {
    ...CompoundButtonDefinition,
    name: 'custom-comp-button',
});
FluentDesignSystem.registry.define('custom-comp-button', CustomFluentCompoundButton);