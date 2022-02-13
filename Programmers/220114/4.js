function solution(nums, K) {
    const len = nums.length;

    const result = [];

    const nMap = new Map();

    for (let i = 0; i < K - 1; i++) {
        nMap.set(nums[i], nMap.get(nums[i]) + 1 || 1);
    }

    let startIdx = 0;

    for (let endIdx = K - 1; endIdx < len; endIdx++) {
        nMap.set(nums[endIdx], nMap.get(nums[endIdx] + 1) || 1);
        result.push([...nMap.keys()].length);

        nMap.set(nums[startIdx], nMap.get(nums[startIdx]) - 1);
        if (nMap.get(nums[startIdx]) === 0) {
            nMap.delete(nums[startIdx]);
        }
        startIdx++;
    }

    return result;
}

console.log(solution([20, 12, 20, 10, 23, 17, 10], 4));
