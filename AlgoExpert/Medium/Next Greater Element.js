const array = [2, 5, -3, -4, 6, 7, 2];

// Solution1 : Brute Force / O(n^2)

// function nextGreaterElement(array) {
//   const res = [];

//   const max = Math.max(...array);

//   for (let i = 0; i < array.length; i += 1) {
//     const cur = array[i];
//     if (cur === max) {
//       res.push(-1);
//       continue;
//     }
//     let rightIdx = i + 1;
//     if (rightIdx === array.length) rightIdx = 0;

//     while (cur >= array[rightIdx]) {
//       console.log(cur);
//       rightIdx += 1;
//       if (rightIdx >= array.length) rightIdx %= array.length;
//     }
//     res.push(array[rightIdx]);
//   }

//   return res;
// }

// Solution2 :

function nextGreaterElement(array) {
  const stack = [];
  const res = Array.from({ length: array.length }, () => -1);

  for (let i = 0; i < 2 * array.length; i += 1) {
    const circularIdx = i % array.length;

    while (
      stack.length &&
      array[stack[stack.length - 1]] < array[circularIdx]
    ) {
      // 스택에 들어가는 idx 값 갱신
      const top = stack.pop();
      res[top] = array[circularIdx];
    }

    stack.push(circularIdx);
  }

  return res;
}

console.log(nextGreaterElement(array));
