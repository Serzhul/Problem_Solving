// 로또
// N개의 수가 주어질 때, 주어진 수 중 6개만 이용하여 로또 번호 만들기

function lotto(N, arr, cur, numbers) {
  // 백트래킹 => 휴리스틱을 이용하느 방법
  if (numbers.length === 6) {
    console.log(numbers);
    return;
  }

  for (let i = cur; i < N; i += 1) {
    numbers.push(arr[i]);
    lotto(N, arr, i + 1, numbers);
    numbers.pop();
  }
}
const N = 8;

const arr = [1, 2, 3, 5, 8, 13, 31, 34];

lotto(N, arr, 0, []);
