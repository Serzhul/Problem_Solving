// 숫자 N이 주어질 때, N*N 배열에서 첫 행과 첫 열은 모두 1로 초기화 한 후 현재 위치의 왼쪽, 위 값의 합 구하여 저장

const N = 5;

// Sol1 : 직접 구현
const arr = Array.from({ length: N }, () => Array.from({ length: N }, () => 1));

for (let i = 1; i < N; i += 1) {
  for (let j = 1; j < N; j += 1) {
    arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
  }
}

console.log(arr);
