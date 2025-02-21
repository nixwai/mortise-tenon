import type { App, Component } from 'vue';

export function install(comp: Component) {
  return (app: App): void => {
    if (comp.name) {
      app.component(comp.name, comp);
    }
  };
}
