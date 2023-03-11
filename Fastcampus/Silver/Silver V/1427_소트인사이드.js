// const solution = (input) => {
//   const [number] = input.toString().trim().split("\n");

//   let answer = "";

//   [...number]
//     .sort((a, b) => b - a)
//     .forEach((radix) => {
//       answer += radix;
//     });

//   console.log(answer);
// };

// 다른 솔루션
const solution = (input) => {
  const [number] = input.toString().trim().split("\n");

  const countArr = Array(10).fill(0);

  for (let i = 0; i < number.length; i += 1) {
    countArr[number[i]] += 1;
  }

  let answer = "";

  for (let i = 9; i >= 0; i -= 1) {
    for (let j = 0; j < countArr[i]; j += 1) {
      answer += `${i}`;
    }
  }

  console.log(answer);
};

solution(`999998999`);
