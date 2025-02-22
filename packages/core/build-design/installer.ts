import type { App, Component, Plugin } from 'vue';
import {
  MtComponentNeo,
  MtExpand,
  MtSort,
  MtTable,
} from '@mortise-tenon/components';
import { version } from './package.json';

const INSTALLED_KEY = Symbol('MT_INSTALLED_KEY');

function makeInstaller(components: Component[] = []) {
  const install = (app: App & { [INSTALLED_KEY]?: boolean }) => {
    if (app[INSTALLED_KEY])
      return;

    app[INSTALLED_KEY] = true;
    components.forEach(c => app.use(c as Plugin));
  };

  return {
    version,
    install,
  };
}

export default makeInstaller([
  MtComponentNeo,
  MtExpand,
  MtSort,
  MtTable,
]);
