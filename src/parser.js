import YAML from 'yaml';
import path from 'path';
import fs from 'fs';

const parsing = (pathname) => {
  const file = fs.readFileSync(path.resolve(process.cwd(), pathname), 'utf8');
  const format = path.extname(pathname);
  if (format === '.json') {
    return JSON.parse(file);
  }
  if (format === '.yaml' || format === '.yml') {
    return YAML.parse(file);
  }
  throw new Error(`Unknown type: '${format}'!`);
};

export default parsing;
