import Button from './src/button.vue';
import type { App } from 'vue';

Button.install = (app: App): void => {
  if (Button.name) {
    app.component(Button.name, Button);
  }
};

export const MtButton = Button;

export * from './src/types';

export default MtButton;
