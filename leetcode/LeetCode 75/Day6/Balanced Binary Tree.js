/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = (root) => {
  let isHighBalanced = true;

  const getHeight = (tree, height) => {
    if (!tree) return 0;

    const leftHeight = getHeight(tree.left, height + 1);
    const rightHeight = getHeight(tree.right, height + 1);

    if (Math.abs(rightHeight - leftHeight) > 1) isHighBalanced = false;

    return Math.max(leftHeight, rightHeight) + 1;
  };

  getHeight(root, 0);

  return isHighBalanced;
};
