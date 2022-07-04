/* eslint-disable import/extensions */
import stylish from './stylish.js';
import plain from './plain.js';

const chooseFormatter = (innerTree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(innerTree);
    case 'plain':
      return plain(innerTree);
    case 'json':
      return JSON.stringify(innerTree);
    default:
      throw new Error(`Unknown type: ${formatName}`);
  }
};

export default chooseFormatter;
