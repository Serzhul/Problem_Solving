function helper(arr) {
  let prev = 0;
  let cur = 0;
  let temp = 0;

  arr.forEach((num) => {
    temp = cur;

    cur = Math.max(cur, prev + num);

    prev = temp;
  });
}

function rob(nums) {
  if (nums.length === 1) return nums[0];
  let rob1 = nums.slice(0, nums.length - 1); // 마지막 집 제외
  let rob2 = nums.slice(1); // 첫 번째 집 제외

  console.log(rob1);
  console.log(rob2);

  rob1 = helper(rob1);
  rob2 = helper(rob2);

  return rob1 >= rob2 ? rob1 : rob2;
}

rob([2, 3, 2]);
