class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// function invertBinaryTree(tree) {
//   const queue = [];

//   queue.push(tree);

//   while (queue.length) {
//     const cur = queue.shift();

//     if (cur) {
//       [cur.left, cur.right] = [cur.right, cur.left];
//       queue.push(cur.left);
//       queue.push(cur.right);
//     }
//   }

//   return tree;
// }

// 복습 23.09.23

function invert(cur, leftNode, rightNode) {
  const temp = leftNode;
  cur.left = rightNode;
  cur.right = temp;
}

function invertBinaryTree(tree) {
  if (tree.left) {
    invertBinaryTree(tree.left);
  }

  if (tree.right) {
    invertBinaryTree(tree.right);
  }

  invert(tree, tree.left, tree.right);

  return tree;
}

console.log(invertBinaryTree(tree));
