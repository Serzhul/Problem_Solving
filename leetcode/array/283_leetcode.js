// nums 배열이 주어졌을 때, 모든 0을 끝으로 보내라 단, 나머지 값들의 순서는 유지한다.
// Follow up: 반복 횟수를 최소화 하는 방법?

// Solution 1 : Swap 알고리즘

// const moveZeroes = (nums) => {
//     for (let i = 0; i < nums.length; i += 1) {
//         const cur = nums[i];

//         for (let j = i + 1; j < nums.length; j += 1) {
//             const next = nums[j];

//             if (cur === 0 && next !== 0) {
//                 [nums[i], nums[j]] = [nums[j], nums[i]];
//                 break;
//             }
//         }
//     }
// };

// Solution2 : Two Pointer 알고리즘

const moveZeroes = (nums) => {
    let pointer = 0; // 0이 아닌 요소들의 개수

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== 0) {
            nums[pointer] = nums[i];
            pointer += 1; // 앞으로 땡긴다.
        }
    }

    for (let i = pointer; i < nums.length; i += 1) {
        nums[i] = 0;
    }
};

moveZeroes([0, 1, 0, 3, 12]);
