// Solution1 : 단순 반복문
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length - 1; i += 1) {
//         for (let j = i + 1; j < nums.length; j += 1) {
//             if (i !== j) {
//                 if (nums[i] + nums[j] === target) return [i + 1, j + 1];
//                 if (nums[i] + nums[j] > target) break;
//             }
//         }
//     }

//     return [];
// };

// Solution2 : 투 포인터

const twoSum = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        if (numbers[start] + numbers[end] === target)
            return [start + 1, end + 1];
        if (numbers[start] + numbers[end] > target) {
            end -= 1;
        } else {
            start += 1;
        }
    }

    return [];
};

twoSum([2, 3, 4], 6);
