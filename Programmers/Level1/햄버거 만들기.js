const ingredient = [1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1];

// Solution1 : 통과 못함

function solution(ingredient) {
  const stack = [];
  let hamburgers = 0;
  let isValid = false;

  for (let i = 0; i < ingredient.length; i += 1) {
    const cur = ingredient[i];
    const lastIng = stack[stack.length - 1];

    if (cur === 1) {
      if (lastIng === 3 && isValid) {
        hamburgers += 1;
        stack.pop();
        stack.pop();
        stack.pop();
      } else {
        isValid = true;
        stack.push(cur);
      }
    } else if ((cur === 2 && lastIng === 1) || (cur === 3 && lastIng === 2)) {
      stack.push(cur);
    } else {
      isValid = false;
      stack.push(cur);
    }
  }

  return hamburgers;
}

// Solution2 : 문자열 사용

// Solution3 : 스택 사용

function solution(ingredient) {
  const stk = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i += 1) {
    console.log(stk);
    stk.push(ingredient[i]);
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      count += 1;
      stk.splice(-4);
    }
  }
  return count;
}

console.log(solution(ingredient));
