import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';

const normalize = (file) => {
  const fullPath = readFileSync(path.resolve(process.cwd(), file));
  return JSON.parse(fullPath);
};

const getDiffs = (file1, file2) => {
  const obj1 = normalize(file1);
  const obj2 = normalize(file2);
  const allKeys = [...Object.keys(obj1), ...Object.keys(obj2)];
  const sorted = _.sortBy(allKeys);
  const uniq = _.uniq(sorted);
  const result = uniq.reduce((acc, key) => {
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      acc.push(`  - ${[key]}: ${obj1[key]}`);
    }
    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      acc.push(`  + ${[key]}: ${obj2[key]}`);
    }
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        acc.push(`    ${[key]}: ${obj2[key]}`);
      } else {
        acc.push(`  - ${[key]}: ${obj1[key]}`);
        acc.push(`  + ${[key]}: ${obj2[key]}`);
      }
    }
    return acc;
  }, []);
  return `{\n${result.join('\n')}\n}`;
};

export default getDiffs;
