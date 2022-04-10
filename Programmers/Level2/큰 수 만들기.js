function solution(number, k) {
  const stack = [];

  let answer = "";

  let len = k;

  [...number].forEach((n) => {
    while (len > 0 && stack[stack.length - 1] < n) {
      stack.pop();
      len -= 1;
    }
    stack.push(n);
  });

  stack.splice(stack.length - k, k);
  answer = stack.join("");

  return answer;
}

solution("1924", 2);
