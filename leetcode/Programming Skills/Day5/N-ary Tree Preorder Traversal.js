/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

const preorder = (root) => {
  const arr = [];

  const dfs = (tree) => {
    if (!tree) return;

    arr.push(tree.val);

    if (tree.children) {
      const nodes = tree.children;

      for (let i = 0; i < nodes.length; i += 1) {
        dfs(nodes[i]);
      }
    }
  };

  dfs(root);

  return arr;
};
