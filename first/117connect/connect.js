var connect = function (root) {
  if (!root) {
    return root;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const currentSize = queue.length;
    const list = []
    for (let i = 0; i < currentSize; i++) {
      const node = queue.shift();
      list.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    const listLength = list.length;
    for (let i = 0; i < listLength; i++) {
      if (i < listLength - 1) {
        list[i].next = list[i + 1];
      }
    }
  }

  return root;
}
