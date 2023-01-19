/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  const res = [];

  const inOrder = (node) => {
    if (!node) return null;

    inOrder(node.left);
    res.push(node.val);
    inOrder(node.right);
  };

  inOrder(root);

  return res[k - 1];
};
