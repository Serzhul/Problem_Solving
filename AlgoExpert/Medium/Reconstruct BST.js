class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

const preOrderTraversalValues = [10, 4, 2, 1, 3, 17, 19, 18];

const tree = new BST(10);
tree.left = new BST(4);
tree.left.left = new BST(2);
tree.left.left.left = new BST(1);
tree.left.right = new BST(3);
tree.right = new BST(17);
tree.right.right = new BST(19);
tree.right.right.left = new BST(18);

function reconstructBst(preOrderTraversalValues) {
  const bst = new BST(preOrderTraversalValues[0]);

  for (let i = 1; i < preOrderTraversalValues.length; i += 1) {
    bst.insert(preOrderTraversalValues[i]);
  }

  return bst;
}

console.log(reconstructBst(preOrderTraversalValues));
