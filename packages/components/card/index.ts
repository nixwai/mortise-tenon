import Card from "./src/index.vue";

import type { App } from "vue";

Card.install = (app: App): void => {
  app.component(Card.name, Card);
};

export const XCard = Card;

export default XCard;
