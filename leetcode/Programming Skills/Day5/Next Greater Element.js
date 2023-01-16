/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

const nextGreaterElement = (nums1, nums2) => {
  const num1len = nums1.length;
  const num2len = nums2.length;

  const res = [];

  for (let i = 0; i < num1len; i += 1) {
    const cur = nums1[i];
    const targetIdx = nums2.indexOf(cur);

    if (targetIdx >= num2len || targetIdx === -1) res.push(-1);
    else {
      let foundElement = false;
      for (let j = targetIdx; j < num2len; j += 1) {
        if (nums2[j] > cur) {
          res.push(nums2[j]);
          foundElement = true;
          break;
        }
      }

      if (!foundElement) res.push(-1);
    }
  }

  return res;
};

nextGreaterElement(nums1, nums2);
