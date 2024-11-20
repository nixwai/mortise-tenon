import type { App } from 'vue';
import Expand from './src/expand.vue';

Expand.install = (app: App): void => {
  if (Expand.name) {
    app.component(Expand.name, Expand);
  }
};

export const MtExpand = Expand;

export * from './src/expand';
