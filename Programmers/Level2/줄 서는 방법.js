const n = 3;
const k = 5;

const solution = (n, k) => {
  const result = [];
  const arr = new Array(n).fill(1).map((_, i) => _ + i);

  function getNum(arr) {
    let fac = 1;
    for (let i = 1; i < arr.length; i += 1) {
      fac *= i;
    }

    const idx = Math.ceil(k / fac) - 1;

    k -= idx * fac;

    return arr[idx];
  }

  for (let i = 1; i <= n; i += 1) {
    const num = getNum(arr);

    arr.splice(arr.indexOf(num), 1);

    result.push(num);
  }

  return result;
};

console.log(solution(n, k));
