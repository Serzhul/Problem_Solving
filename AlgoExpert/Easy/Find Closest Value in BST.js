// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

const expected = 12;

function findClosestValueInBst(tree, target) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let minDiffNum;

  const traverse = (node) => {
    if (!node) return;

    const diff = Math.abs(target - node.value);

    if (diff < minDiff) {
      minDiffNum = node.value;
      minDiff = diff;
    }

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(tree);

  return minDiffNum;
}

console.log(findClosestValueInBst(root, expected));
