/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const num1 = "123";
const num2 = "456";

const multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length;
  const n = num2.length;
  const res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = res[p2] + Number(num1[i]) * Number(num2[j]);
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }
  if (res[0] === 0) res.shift();
  return res.join("");
};

multiply(num1, num2);
