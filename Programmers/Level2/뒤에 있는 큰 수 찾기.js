const numbers = [9, 1, 5, 3, 6, 2];

function solution(numbers) {
  const answer = Array(numbers.length);
  const stack = [0];

  for (let i = 1; i < numbers.length; i += 1) {
    const cur = numbers[i];
    while (stack.length && numbers[stack.at(-1)] < cur) {
      const popped = stack.pop();
      answer[popped] = cur;
    }
    stack.push(i);
  }

  while (stack.length) {
    const popped = stack.pop();
    answer[popped] = -1;
  }
  return answer;
}

console.log(solution(numbers));
