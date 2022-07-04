/* eslint-disable import/extensions */
import stylish from './stylish.js';
import plain from './plain.js';

const chooseFormatter = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish;
    case 'plain':
      return plain;
    default:
      throw new Error(`Unknown type: ${formatName}`);
  }
};

export default chooseFormatter;
