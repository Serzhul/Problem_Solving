// const solution = (input) => {
//   const [N, nums] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split(" ").map(Number);
//     });

//   const uniqueArr = [...new Set(nums)];

//   uniqueArr.sort((a, b) => a - b);

//   const numsMap = new Map();
//   for (let i = 0; i < uniqueArr.length; i += 1) {
//     numsMap.set(uniqueArr[i], i);
//   }

//   let answer = "";

//   nums.forEach((num) => {
//     answer += `${numsMap.get(num)} `;
//   });

//   console.log(answer);
// };

const solution = (input) => {
  const [N, nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const uniqueArrays = [...new Set(nums)];

  uniqueArrays.sort((a, b) => a - b);

  const numsMap = new Map();

  for (let i = 0; i < uniqueArrays.length; i += 1) {
    numsMap.set(uniqueArrays[i], i);
  }

  let ans = "";

  for (let i = 0; i < nums.length; i += 1) {
    ans += `${numsMap.get(nums[i])} `;
  }

  console.log(ans);
};

solution(`5
2 4 -10 4 -9`);
