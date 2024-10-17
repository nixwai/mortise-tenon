import type { App } from 'vue';
import ExpandBox from './src/expand-box.vue';

ExpandBox.install = (app: App): void => {
  if (ExpandBox.name) {
    app.component(ExpandBox.name, ExpandBox);
  }
};

export const MtExpandBox = ExpandBox;
