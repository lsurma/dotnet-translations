import {  accordionDefinition, accordionItemDefinition, AnchorButtonDefinition, AvatarDefinition, BadgeDefinition, ButtonDefinition, CheckboxDefinition, CompoundButtonDefinition, CounterBadgeDefinition, DialogBodyDefinition, DialogDefinition, DividerDefinition, DrawerBodyDefinition, DrawerDefinition, FieldDefinition, ImageDefinition, LabelDefinition, LinkDefinition, MenuButtonDefinition, MenuDefinition, MenuItemDefinition, MenuListDefinition, MessageBarDefinition, ProgressBarDefinition, RadioDefinition, RadioGroupDefinition, RatingDisplayDefinition, SliderDefinition, SpinnerDefinition, SwitchDefinition, TabDefinition, TablistDefinition, TabPanelDefinition, TabsDefinition, TextAreaDefinition, TextDefinition, TextInputDefinition, ToggleButtonDefinition} from '@fluentui/web-components';
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
const components = [accordionDefinition, accordionItemDefinition, AnchorButtonDefinition, AvatarDefinition, BadgeDefinition, ButtonDefinition, CheckboxDefinition, CompoundButtonDefinition, CounterBadgeDefinition, DialogBodyDefinition, DialogDefinition, DividerDefinition, DrawerBodyDefinition, DrawerDefinition, FieldDefinition, ImageDefinition, LabelDefinition, LinkDefinition, MenuButtonDefinition, MenuDefinition, MenuItemDefinition, MenuListDefinition, MessageBarDefinition, ProgressBarDefinition, RadioDefinition, RadioGroupDefinition, RatingDisplayDefinition, SliderDefinition, SpinnerDefinition, SwitchDefinition, TabDefinition, TablistDefinition, TabPanelDefinition, TabsDefinition, TextAreaDefinition, TextDefinition, TextInputDefinition, ToggleButtonDefinition];
components.forEach(definition => {
  Object.defineProperty(definition, 'name', {
    value: definition.name.replace("fluent", "f3"),
    writable: false
  });
  definition.define(FluentDesignSystem.registry);
});

//
// // Remap types
// const components = [Button, CompoundButton, Accordion, AccordionItem, MenuItem, Menu, MenuButton];
// const prefix = 'fluent3-';
// components.forEach(component => {
//   const tagName = component.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
//   const newTagName = prefix + tagName;  
//   console.log(newTagName);
//   FluentDesignSystem.registry.define(newTagName, component);
// });

setTheme(webLightTheme);

