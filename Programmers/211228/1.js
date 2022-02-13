function solution(nums, k) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
    }

    console.log(map);
}

solution([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3);

// [3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11]
