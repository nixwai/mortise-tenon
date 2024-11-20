import type { App } from 'vue';
import Sort from './src/sort';

Sort.install = (app: App): void => {
  if (Sort.name) {
    app.component(Sort.name, Sort);
  }
};

export const MtSort = Sort;

export * from './src/sort';
