const solution = (input) => {
  const [s, t] = input.toString().trim().split(" ").map(Number);

  if (s === t) {
    console.log(0);
    return;
  }

  const visited = {};

  const MAX = 1000000000;

  const queue = [];

  queue.push([s, ""]);

  const signs = ["*", "+", "-", "/"];

  while (queue.length) {
    const [cur, curSign] = queue.shift();

    if (cur === t) {
      console.log(curSign);
      return;
    }

    visited[cur] = true;

    for (let i = 0; i < signs.length; i += 1) {
      const sign = signs[i];
      let newCur;

      if (sign === "*") {
        newCur = cur * cur;
      } else if (sign === "+") {
        newCur = cur + cur;
      } else if (sign === "-") {
        newCur = cur - cur;
      } else if (sign === "/" && cur !== 0) {
        newCur = cur / cur;
      }

      if (!visited[newCur] && newCur >= 0 && newCur <= MAX)
        queue.push([newCur, curSign + sign]);
    }
  }

  console.log(-1);
};

solution(`4 256`);
