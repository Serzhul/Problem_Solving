const canJump = (nums) => {
  const target = nums.length - 1;

  let idx = 0;

  let max = 0;

  while (idx <= target) {
    const jump = nums[idx];

    max = Math.max(max, idx + jump);

    if (max >= target) return true;

    if (max <= idx && jump === 0) return false;

    idx += 1;
  }
};

console.log(canJump([0]));
