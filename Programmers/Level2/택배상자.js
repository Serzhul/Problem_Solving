const order = [3, 5, 4, 2, 1];

function solution(order) {
  let curOrder = 0;
  let res = 0;
  const stack = [];

  for (let i = 1; i <= order.length; i += 1) {
    const curBox = i;

    if (order[curOrder] !== curBox) {
      stack.push(curBox);
      continue;
    }

    curOrder += 1;
    res += 1;

    while (stack.length && order[curOrder] === stack.at(-1)) {
      stack.pop();
      curOrder += 1;
      res += 1;
    }
  }

  return res;
}

console.log(solution(order));
