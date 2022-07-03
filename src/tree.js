/* eslint-disable import/extensions */
import _ from 'lodash';

const getTree = (obj1, obj2) => {
  const allKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sorted = _.sortBy(allKeys);
  const result = sorted.map((key) => {
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      return { key, type: 'deleted', value: obj1[key] };
    }
    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      return { key, type: 'added', value: obj2[key] };
    }
    if (_.isEqual(obj1[key], obj2[key])) {
      return { key, type: 'unchanged', value: obj1[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const children = getTree(obj1[key], obj2[key]);
      return { key, type: 'nested', children };
    }
    return {
      key, type: 'changed', beforeValue: obj1[key], afterValue: obj2[key],
    };
  });
  return result;
};

export default getTree;
