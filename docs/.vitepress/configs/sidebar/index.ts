import type { DefaultTheme } from 'vitepress';
import { componentsSidebar } from './components';
import { hooksSidebar } from './hooks';
import { presetsSidebar } from './presets';
import { utilsSidebar } from './utils';

export const sidebar: DefaultTheme.Sidebar = {
  '/zh/components/': componentsSidebar,
  '/zh/presets/': presetsSidebar,
  '/zh/hooks/': hooksSidebar,
  '/zh/utils/': utilsSidebar,
};
