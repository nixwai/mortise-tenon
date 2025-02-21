import type { App } from 'vue';
import ComponentNeo from './src/component-neo.vue';

ComponentNeo.install = (app: App): void => {
  if (ComponentNeo.name) {
    app.component(ComponentNeo.name, ComponentNeo);
  }
};

export const MtComponentNeo = ComponentNeo;

export * from './src/component-neo.vue';
export * from './src/hooks/use-component-neo';
