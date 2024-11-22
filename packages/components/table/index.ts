import type { App } from 'vue';
import Table from './src/table.vue';

Table.install = (app: App): void => {
  if (Table.name) {
    app.component(Table.name, Table);
  }
};

export const MtTable = Table;

export * from './src/table';
