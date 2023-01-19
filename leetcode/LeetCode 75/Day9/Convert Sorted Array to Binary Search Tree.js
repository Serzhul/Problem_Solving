function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const nums = [-10, -3, 0, 5, 9];

const sortedArrayToBST = (nums) => {
  const bst = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = bst(left, mid - 1);
    root.right = bst(mid + 1, right);

    return root;
  };

  return bst(0, nums.length - 1);
};

console.log(sortedArrayToBST(nums));
