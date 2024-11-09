import {Button, CompoundButton, Accordion, AccordionItem, MenuItem, Menu, MenuButton} from '@fluentui/web-components';
import { FluentDesignSystem } from '@fluentui/web-components';
import { setTheme } from '@fluentui/web-components';
import { webLightTheme, webDarkTheme } from '@fluentui/tokens';

const fluent3 = {
  setTheme: setTheme,
  webLightTheme: webLightTheme,
  webDarkTheme: webDarkTheme
}

window.fluent3 = fluent3;

// Remap types
const components = [Button, CompoundButton, Accordion, AccordionItem, MenuItem, Menu, MenuButton];
const prefix = 'fluent3-';
components.forEach(component => {
  const tagName = component.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const newTagName = prefix + tagName;  
  FluentDesignSystem.registry.define(newTagName, component);
});

setTheme(webLightTheme);

