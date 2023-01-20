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
const maxDepth = (root) => {
  let depth = 0;
  let max = 0;

  const dfs = (node) => {
    if (!node) return;
    depth += 1;
    max = Math.max(depth, max);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    depth -= 1;
  };

  dfs(root);

  console.log(max);
};
