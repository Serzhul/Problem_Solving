const calExpression = (str) => {
  const newStr = str.replaceAll(" ", "");

  if (!str.includes("+") && !str.includes("-")) return newStr;

  let lastStr = "+";
  let lastNumber = newStr[0];
  let sum = 0;

  for (let i = 1; i < newStr.length; i += 1) {
    const curStr = newStr[i];

    if (!Number.isNaN(Number(curStr))) {
      lastNumber += curStr;
    } else {
      if (lastStr === "+") {
        sum += Number(lastNumber);
      } else {
        sum -= Number(lastNumber);
      }
      lastNumber = "";
      lastStr = curStr;
    }
  }

  if (lastStr === "+") {
    sum += Number(lastNumber);
  } else {
    sum -= Number(lastNumber);
  }

  return sum;
};

const solution = (input) => {
  const [T, ...cases] = input.toString().trim().split("\n").map(Number);

  const signs = [" ", "+", "-"];

  const dfs = (res, depth, n, arr) => {
    if (depth === n - 1) {
      let str = "";

      for (let i = 0; i < n - 1; i += 1) {
        str += arr[i] + res[i];
      }

      // 식의 마지막 숫자
      str += `${arr[n - 1]} `;

      const current = calExpression(str);
      if (current === 0) console.log(str);
      return;
    }

    for (let i = 0; i < signs.length; i += 1) {
      res.push(signs[i]);
      dfs(res, depth + 1, n, arr);
      res.pop();
    }
  };

  for (let i = 0; i < cases.length; i += 1) {
    const num = cases[i];
    const numArr = Array.from({ length: num }, (_, i) => i + 1);

    dfs([], 0, num, numArr);
    console.log();
  }
};

solution(`2
3
7`);
