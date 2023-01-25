function branchSums(root) {
  const res = [];

  const preOrder = (node, sum) => {
    if (!node) {
      return;
    }

    sum += node.value;

    if (node.left) {
      preOrder(node.left, sum);
    }
    if (node.right) {
      preOrder(node.right, sum);
    }

    if (!node.left && !node.right) res.push(sum);
  };

  preOrder(root, 0);

  return res;
}
