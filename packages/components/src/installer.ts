import type { App, Component, Plugin } from 'vue';
import { version } from '../package.json';
import { MtExpand } from './expand';
import { MtSort } from './sort';
import { MtTable } from './table';

const INSTALLED_KEY = Symbol('MT_INSTALLED_KEY');

function makeInstaller(components: Component[] = []) {
  const install = (app: App & { [INSTALLED_KEY]?: boolean }) => {
    if (app[INSTALLED_KEY]) { return; }

    app[INSTALLED_KEY] = true;
    components.forEach(c => app.use(c as Plugin));
  };

  return {
    version,
    install,
  };
}

const installer = makeInstaller([
  MtExpand,
  MtSort,
  MtTable,
]);

export default installer;
