import { series } from 'gulp';
import { toolOutput } from '../paths';
import { run } from '../tasks';

export default series(
  () => run('pnpm publish --registry https://registry.npmjs.org', toolOutput),
);
