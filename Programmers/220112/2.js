const solution = (nums, h) => {
    nums.sort((a, b) => b - a);
    const len = nums.length;
    if (h === len) return nums[len - 1];

    let min = Number.MAX_SAFE_INTEGER;

    const limit = Math.floor(h / len);

    for (let i = nums[0]; i >= nums[len - 1]; i--) {
        let temp = 0;
        let isValid = true;
        for (let j = 0; j < len; j++) {
            const q = Math.floor(nums[j] / i);
            const r = nums[j] % i ? 1 : 0;

            if (q > limit) {
                isValid = false;
                break;
            }
            if (temp > h) break;
            temp += q + r;
        }
        if (!isValid) break;
        if (temp === h) min = Math.min(min, i);
    }

    return min;
};

console.log(solution([29, 12, 24, 5, 19], 6));
