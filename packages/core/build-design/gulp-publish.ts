import { series } from 'gulp';
import { designOutput } from '../paths';
import { run } from '../tasks';

export default series(
  () => run('npm config set registry https://registry.npmjs.org'),
  () => run('pnpm publish', designOutput),
);
