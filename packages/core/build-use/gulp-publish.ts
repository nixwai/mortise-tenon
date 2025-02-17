import { series } from 'gulp';
import { useOutput } from '../paths';
import { run } from '../tasks';

export default series(
  () => run('pnpm publish --registry https://registry.npmjs.org', useOutput),
);
