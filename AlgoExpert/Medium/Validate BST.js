class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, min = -Infinity, max = Infinity) {
  if (!tree) return true;
  if (tree.value < min || tree.value >= max) return false;

  return (
    validateBst(tree.left, min, tree.value) &&
    validateBst(tree.right, tree.value, max)
  );
}
