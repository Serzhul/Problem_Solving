/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const map = Array.from({ length: 11 }, () => 0);

  const numArr = String(n)
    .split("")
    .map((num) => Number(num));

  numArr.forEach((num) => {
    map[num] = num ** 2;
  });

  let result = n;
  let newArr = [];
  let startFlag = false;

  while (result !== 1) {
    newArr = String(result)
      .split("")
      .map((num) => Number(num));

    if (startFlag && newArr.length === 1) {
      if (newArr[0] === 7) return true;
      return false;
    }

    result = newArr.reduce((acc, cur) => {
      if (map[cur] === 0) {
        map[cur] = cur ** 2;
      }
      return acc + map[cur];
    }, 0);

    if (!startFlag) startFlag = true;
  }

  return true;
};

const input = 1111111;

console.log(isHappy(input));
