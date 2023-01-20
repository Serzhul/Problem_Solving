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
 * @return {number}
 */
const sumOfLeftLeaves = (root) => {
  let sum = 0;
  const dfs = (node, direct) => {
    if (!node) return;

    if (node.left) dfs(node.left, "left");
    if (node.right) dfs(node.right, "right");

    if (!node.left && !node.right && direct === "left") sum += node.val;
  };

  dfs(root, null);
  return sum;
};
