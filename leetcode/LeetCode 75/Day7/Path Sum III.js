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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = (root, targetSum) => {
  let res = 0;
  const map = {};

  const traverse = (node, sum) => {
    if (!node) return null;

    sum += node.val;

    if (sum === targetSum) res += 1;

    if (map[sum - targetSum]) res += map[sum - targetSum];

    map[sum] = map[sum] + 1 || 1;

    if (node.left) traverse(node.left, sum);
    if (node.right) traverse(node.right, sum);

    map[sum] -= 1;
  };

  traverse(root, 0);

  return res;
};
