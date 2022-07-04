/* eslint-disable import/extensions */
import parsing from './src/parser.js';
import getTree from './src/tree.js';
import chooseFormatter from './src/formatters/index.js';

const getDiffs = (path1, path2, formatName = 'stylish') => {
  const obj1 = parsing(path1);
  const obj2 = parsing(path2);
  const tree = getTree(obj1, obj2);
  const formatter = chooseFormatter(formatName);

  return formatter(tree);
};

export default getDiffs;
