import { dest, src } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';

const sass = gulpSass(dartSass);

export function buildStyle(path: string, outDir: string) {
  return src(`${path}/**/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${outDir}/lib/components`))
    .pipe(dest(`${outDir}/es/components`));
}
