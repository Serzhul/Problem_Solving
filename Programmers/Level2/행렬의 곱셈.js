const arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];

const arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];

function solution(arr1, arr2) {
  const res = Array.from({ length: arr1.length }, () =>
    Array.from({ length: arr2[0].length }, () => 0)
  );

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2[0].length; j += 1) {
      for (let k = 0; k < arr1[0].length; k += 1) {
        res[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return res;
}

console.log(solution(arr1, arr2));
