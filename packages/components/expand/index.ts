import { install } from '../utils/install';
import Expand from './src/expand.vue';

Expand.install = install(Expand);

export const MtExpand = Expand;

export * from './src/expand';
