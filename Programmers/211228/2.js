function solution(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let val = 0;
        for (let j = i; j < nums.length; j++) {
            val = val + nums[j];

            if (val % 2 != 0) result++;
        }
    }

    return result;
}

// function solution(nums) {
//     let oddArr = [];

//     const getSubsequence = (arr, index, target) => {
//         if (arr.length === index) {
//             if (target.length > 0) {
//                 console.log(target);
//                 let sum = 0;
//                 for (let i = 0; i < target.length; i++) {
//                     sum += target[i];
//                 }
//                 if (sum % 2 !== 0) oddArr.push(sum);
//             }
//         } else {
//             getSubsequence(arr, index + 1, target);

//             target.push(arr[index]);

//             getSubsequence(arr, index + 1, target);

//             target.pop();
//         }
//     };

//     getSubsequence(nums, 0, []);

//     return oddArr.length;
// }

solution([1, 3, 5]);
