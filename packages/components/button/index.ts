import type { App } from "vue";
import Button from "./src/button.vue";

Button.install = (app: App): void => {
  if (Button.name) {
    app.component(Button.name, Button);
  }
};

export const MtButton = Button;

export * from "./src/types";
