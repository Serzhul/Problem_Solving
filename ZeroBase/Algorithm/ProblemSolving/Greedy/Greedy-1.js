// 회의실 배정
// N개의 회의실 (시작시간, 종료시간)이 주어질때, 회의가 겹치지 않게 하면서 회의를 할 수 있는 최대 개수
// (회의 시작 시간, 끝나는 시간이 같으면 끝나자마자 시작하는 것으로 간주)
const input = [
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6, 10],
  [8, 11],
  [8, 12],
  [2, 13],
  [12, 14],
];

// 끝나는 시간이 가장 빠른 순으로 정렬 => 그 다음 시작 시간이 어디에 있든 들어올 수 있으므로
// 회의 정렬 순서
// 1. 먼저 끝나는 회의 순서
// 2. 끝나는 회의 순서가 같다면, 먼저 시작하는 회의순서
input.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

console.log(input);

let count = 0;
let endTime = 0;

for (let i = 0; i < input.length; i += 1) {
  const [start, end] = input[i];

  // 마지막에 회의가 끝난 회의실이 있고, 그 다음에 시작하는 회의가 있는 경우

  console.log(start, endTime);
  if (start >= endTime) {
    count += 1;
    endTime = end;
  }
}

console.log(count);
