import { createGlobalState } from '@vueuse/core';
import { createDynamicComponent } from 'mortise-tenon-use';

export const globalDynamicComponent = createGlobalState(createDynamicComponent);
