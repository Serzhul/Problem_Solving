class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function invertBinaryTree(tree) {
  const queue = [];

  queue.push(tree);

  while (queue.length) {
    const cur = queue.shift();

    if (cur) {
      [cur.left, cur.right] = [cur.right, cur.left];
      queue.push(cur.left);
      queue.push(cur.right);
    }
  }

  return tree;
}

console.log(invertBinaryTree(tree));
