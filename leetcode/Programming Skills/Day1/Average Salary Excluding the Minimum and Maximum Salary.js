/**
 * @param {number[]} salary
 * @return {number}
 */

const salary = [4000, 3000, 1000, 2000];

const average = (salary) => {
  const len = salary.length;

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < salary.length; i += 1) {
    if (max < salary[i]) max = salary[i];
    if (min > salary[i]) min = salary[i];

    sum += salary[i];
  }

  sum -= max;
  sum -= min;

  return (sum / (len - 2)).toFixed(5);
};

console.log(average(salary));
