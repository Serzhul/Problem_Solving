class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);

function binaryTreeDiameter(tree) {
  let maxDiameter = -Infinity;

  function calcDiameter(tree, diameter) {
    if (!tree) return 0;

    const leftCount = calcDiameter(tree.left, diameter);
    const rightCount = calcDiameter(tree.right, diameter);

    maxDiameter = Math.max(leftCount + rightCount, maxDiameter);

    return Math.max(leftCount + 1, rightCount + 1);
  }

  calcDiameter(tree, maxDiameter);

  return maxDiameter;
}

console.log(binaryTreeDiameter(root));
