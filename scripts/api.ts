import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getFilePath(dir: string): string[] {
  const dir_path: string = join(process.cwd(), dir)
  return fs.readdirSync(dir_path).map((file: string)=>join(dir_path, file))
}