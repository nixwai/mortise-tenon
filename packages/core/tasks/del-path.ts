import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import { resolve } from 'node:path';

export async function delPath(path: string): Promise<void> {
  try {
    if (fs.existsSync(path)) {
      const files = await fsPromises.readdir(path);
      for (const file of files) {
        const curPath = resolve(path, file);
        const isDirectory = (await fsPromises.stat(curPath)).isDirectory();

        if (isDirectory) {
          await delPath(curPath); // 递归删除子目录
        }
        else {
          await fsPromises.unlink(curPath);
        }
      }
      // 当前目录下已无文件或子目录，可以直接删除
      await fsPromises.rmdir(path);
    }
  }
  catch (error) {
    console.error(`Error deleting path ${path}:`, error);
  }
}
