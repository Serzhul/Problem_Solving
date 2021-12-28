const minPairSum = (nums) => {
    nums.sort((a, b) => a - b);

    let output = Number.MIN_SAFE_INTEGER;

    for (let i = 0, j = nums.length - 1; i < nums.length / 2; i++, j--) {
        output = Math.max(output, nums[i] + nums[j]);
    }
    return output;
};

minPairSum([4, 1, 5, 1, 2, 5, 1, 5, 5, 4]);
