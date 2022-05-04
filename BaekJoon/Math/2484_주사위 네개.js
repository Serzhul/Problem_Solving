// Solution 1

// const solution = (s) => {
//     const input = s.toString().trim().split('\n');
//     const len = input[0];
//     const people = [];
//     let diceVal = [0, 0, 0, 0, 0, 0];
//     let max = Number.MIN_SAFE_INTEGER;
//     let count = 0;

//     const fourSame = (num) => 50000 + num * 5000;
//     const threeSame = (num) => 10000 + num * 1000;
//     const twoTwo = (num1, num2) => 2000 + num1 * 500 + num2 * 500;
//     const twoSame = (num) => 1000 + num * 100;
//     const failed = (maxNum) => maxNum * 100;

//     for (let i = 1; i <= len; i++) {
//         people.push(input[i].split(' ').map((el) => +el));
//     }

//     for (const person of people) {
//         for (const dice of person) {
//             diceVal[dice - 1]++;
//         }
//         const checkDice = Math.max(...diceVal);
//         if (checkDice === 4) {
//             max = Math.max(max, fourSame(diceVal.indexOf(checkDice) + 1));
//         } else if (checkDice === 3) {
//             max = Math.max(max, threeSame(diceVal.indexOf(checkDice) + 1));
//         } else if (checkDice === 2) {
//             let count = 0;
//             let idx1 = -1;
//             let idx2 = -1;
//             for (let i = 0; i < 6; i++) {
//                 if (diceVal[i] === 2) {
//                     if (idx1 < 0) {
//                         idx1 = i;
//                     } else {
//                         idx2 = i;
//                     }
//                     count++;
//                 }
//             }
//             if (count === 2) {
//                 max = Math.max(max, twoTwo(idx1 + 1, idx2 + 1));
//             } else {
//                 max = Math.max(max, twoSame(idx1 + 1));
//             }
//         } else {
//             let temp = -1;
//             for (let j = 5; j >= 0; j--) {
//                 if (diceVal[j] > 0) {
//                     temp = j + 1;
//                     break;
//                 }
//             }
//             max = Math.max(max, failed(temp));
//         }

//         diceVal = [0, 0, 0, 0, 0, 0];
//     }

//     console.log(max);
// };

const solution = (s) => {
  const [N, ...people] = s
    .toString()
    .trim()
    .split("\n")
    .map((el, i) => {
      if (i === 0) return Number(el);
      return el.split(" ").map((num) => Number(num));
    });

  // 같은 눈이 4개가 나오면 50,000원+(같은 눈)×5,000원의 상금을 받게 된다.
  // 같은 눈이 3개만 나오면 10,000원+(3개가 나온 눈)×1,000원의 상금을 받게 된다.
  // 같은 눈이 2개씩 두 쌍이 나오는 경우에는 2,000원+(2개가 나온 눈)×500원+(또 다른 2개가 나온 눈)×500원의 상금을 받게 된다.
  // 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
  // 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

  const getPrize = (dices) => {
    const diceSet = new Set(dices);

    if (diceSet.size === 1) {
      return 50000 + dices[0] * 5000;
    }
    if (diceSet.size === 2) {
      if (dices[1] === dices[2]) {
        return 10000 + dices[1] * 1000;
      }
      return 2000 + (dices[1] + dices[2]) * 500;
    }

    for (let i = 0; i < 3; i += 1) {
      if (dices[i] === dices[i + 1]) {
        return 1000 + dices[i] * 100;
      }
    }
    return dices[dices.length - 1] * 100;
  };

  console.log(people.map((person) => getPrize(person.sort((a, b) => a - b))));
};

solution(`4
3 3 3 3
3 3 6 3
2 2 6 6
6 2 1 5`);
