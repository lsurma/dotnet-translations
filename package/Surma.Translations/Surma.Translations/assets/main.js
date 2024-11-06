import {Button, ButtonDefinition} from '@fluentui/web-components';
import { FluentDesignSystem } from '@fluentui/web-components';
import { FASTElement } from '@microsoft/fast-element';
import { setTheme } from '@fluentui/web-components';
import { webLightTheme } from '@fluentui/tokens';

setTheme(webLightTheme);

// Create a custom class that extends the base Fluent component
export class CustomButton extends Button {
  constructor() {
    super();
  }
}
// Define the custom element configuration
const definition = {
    name: 'custom-button',
    template: ButtonDefinition.template,
    styles: ButtonDefinition.styles
};

FASTElement.compose(CustomButton, definition);

// Register with Fluent Design System
FluentDesignSystem.registry.define('custom-button', CustomButton);