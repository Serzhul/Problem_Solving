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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  const isSameTree = (tree1, tree2) => {
    if (!tree1 || !tree2) return !tree1 && !tree2;

    if (tree1.val !== tree2.val) return false;

    return (
      isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    );
  };

  const queue = [];

  queue.push(root);

  while (queue.length) {
    const tree = queue.pop();

    if (!tree) continue;

    if (isSameTree(tree, subRoot)) return true;

    queue.push(tree.right, tree.left);
  }

  return false;
};
