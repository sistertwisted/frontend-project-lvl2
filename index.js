/* eslint-disable import/extensions */
import parsing from './src/parser.js';
import stylish from './src/stylish.js';
import getTree from './src/tree.js';

const getDiffs = (path1, path2) => {
  const obj1 = parsing(path1);
  const obj2 = parsing(path2);
  const tree = getTree(obj1, obj2);

  return stylish(tree);
};

export default getDiffs;
