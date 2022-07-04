const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  } if (value === null) {
    return null;
  }
  return String(value);
};

const plain = (innerTree) => {
  const iter = (nodes, parents) => nodes
    .filter((node) => node.type !== 'unchanged')
    .map((node) => {
      const property = parents ? `${parents}.${node.key}` : node.key;
      switch (node.type) {
        case 'added':
          return `Property '${property}' was added with value: ${stringify(node.value)}`;
        case 'deleted':
          return `Property '${property}' was removed`;
        case 'changed':
          return `Property '${property}' was updated. From ${stringify(node.beforeValue)} to ${stringify(node.afterValue)}`;
        case 'nested':
          return `${iter(node.children, property)}`;
        default:
          throw new Error(`Unknown type: ${node.type}`);
      }
    }).join('\n');
  return iter(innerTree, 0);
};
export default plain;
