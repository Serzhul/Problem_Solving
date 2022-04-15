/** 음이 아닌 수가 저장된 배열에서 최댓값을 구하는 함수 */

// solution 1 : 모든 원소를 하나씩 확인하면서 가장 큰 수를 기록한 다음 반환
// 시간복잡도 : O(n)
// function compareToMax(arr, n) {
//   let max = arr[0];

//   if (n < 0) return -1;

//   for (let i = 1; i < n; i += 1) {
//     if (max < arr[i]) max = arr[i];
//   }

//   return max;
// }

// console.log(compareToMax([1, 6, 2, 3, 5, 32, 4, 35, 257, 235, 2, 45], 12));

// solution 2 : 각 값을 다른 모든 값과 비교 => 다른 모든 값이 주어진 값 이하라면 그 값이 최댓값
// 시간복잡도 : O(n^2)

function compareToAll(arr, n) {
  let i = 0;
  let j = 0;
  let isMax = false;

  if (n <= 0) return -1;

  for (i = n - 1; i > 0; i -= 1) {
    isMax = true;
    for (j = 0; j < n; j += 1) {
      if (arr[j] > arr[i]) isMax = false;
    }

    if (isMax) break;
  }

  return arr[i];
}

console.log(compareToAll([1, 6, 2, 3, 5, 32, 4, 35, 257, 235, 2, 45], 12));
