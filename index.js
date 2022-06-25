import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';

const getDiffs = (file1, file2) => {
  const normalized1 = readFileSync(path.resolve(process.cwd(), file1));
  const normalized2 = readFileSync(path.resolve(process.cwd(), file2));

  const obj1 = JSON.parse(normalized1);
  const obj2 = JSON.parse(normalized2);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = [...keys1, ...keys2];
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
