const a = 2;
const b = 1;
const n = 20;

function solution(a, b, n) {
  // a : 필요한 빈 병 수
  // b : a만큼 빈 병을 가져왔을 때 주는 콜라 수
  // n : 현재 빈 병 수

  let curCan = n;
  let res = 0;

  while (curCan >= a) {
    curCan -= a;
    curCan += b;
    res += b;
  }

  return res;
}

console.log(solution(a, b, n));
