// eslint-disable-next-line max-classes-per-file
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(15);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.left.right = new BST(3);
root.left.right = new BST(5);
root.right = new BST(20);
root.right.left = new BST(17);
root.right.right = new BST(22);

const k = 3;

// Solution 1 : 일반적인 문제 풀이
// function findKthLargestValueInBst(tree, k) {
//   const arr = [];
//   const traverse = (node) => {
//     if (!node) return;

//     traverse(node.left);
//     arr.push(node.value);
//     traverse(node.right);
//   };

//   traverse(tree);

//   return arr[arr.length - k];
// }

// Solution 2 : 좀 더 효율적인 문제 풀이

class TreeInfo {
  constructor(numberOfNodesVisited, latestVisitedNodeValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}

function findKthLargestValueInBst(tree, k) {
  const treeInfo = new TreeInfo(0, -1);

  function reverseInOrderTraverse(node, k, treeInfo) {
    if (node === null || treeInfo.numberOfNodesVisited >= k) return;

    reverseInOrderTraverse(node.right, k, treeInfo);

    if (treeInfo.numberOfNodesVisited < k) {
      treeInfo.numberOfNodesVisited += 1;
      treeInfo.latestVisitedNodeValue = node.value;
      reverseInOrderTraverse(node.left, k, treeInfo); //
    }
  }
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.latestVisitedNodeValue;
}

console.log(findKthLargestValueInBst(root, k));
