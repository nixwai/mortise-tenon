import path from 'node:path';
import fs from 'fs-extra';

export async function editPackage(filePath: string, config: Record<string, any>) {
  try {
    const pkgPath = path.join(filePath, 'package.json');
    if (!fs.existsSync(pkgPath)) {
      return;
    }
    const pkg = await fs.readJson(pkgPath);
    Object.assign(pkg, config);
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });
  }
  catch (error) {
    console.error('Error editing package.json:', error);
  }
}
