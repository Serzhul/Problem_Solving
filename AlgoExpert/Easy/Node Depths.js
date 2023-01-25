class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

function nodeDepths(root) {
  let depthSum = 0;

  const traverse = (node, depth) => {
    if (!node) {
      return;
    }

    depthSum += depth;

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  };

  traverse(root, 0);

  return depthSum;
}

console.log(nodeDepths(root));
