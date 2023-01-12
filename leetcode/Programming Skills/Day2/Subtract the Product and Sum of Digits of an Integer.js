/**
 * @param {number} n
 * @return {number}
 */

const n = 234;

const sumOfDigits = (num) => {
  const nStr = num + "";
  let sum = 0;

  for (let i = 0; i < nStr.length; i += 1) {
    sum += Number(nStr[i]);
  }

  return sum;
};

const multipleOfDigits = (num) => {
  const nStr = num.toString();
  let multiple = 1;

  for (let i = 0; i < nStr.length; i += 1) {
    multiple *= Number(nStr[i]);
  }

  return multiple;
};

const subtractProductAndSum = (n) => multipleOfDigits(n) - sumOfDigits(n);

console.log(subtractProductAndSum(n));
