const threeSum = (nums) => {
    const results = [];

    if (nums.length < 3) return results;

    nums.sort((a, b) => a - b);

    const target = 0;

    for (let i = 0; i < nums.length - 2; i += 1) {
        if (nums[i] > target) break;

        if (i > 0 && nums[i] !== nums[i - 1]) {
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];

                if (sum === target) {
                    results.push([nums[i], nums[j], nums[k]]);

                    while (nums[j] === nums[j + 1]) j += 1;
                    while (nums[k] === nums[k - 1]) k -= 1;

                    j += 1;
                    k -= 1;
                } else if (sum < target) {
                    j += 1;
                } else {
                    k -= 1;
                }
            }
        }
    }
    return results;
};

threeSum([-1, 0, 1, 2, -1, -4]);
