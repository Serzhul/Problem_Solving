function solution(n) {
  // K칸 앞으로 점프 or 현재까지 온 거리 * 2
  // K칸 앞으로 점프 시  K 만큼 배터리 소모, 순간 이동은 X

  let cur = n;
  let answer = 0;

  while (cur !== 0) {
    if (cur % 2 === 0) cur /= 2;
    else {
      answer += 1;
      cur = Math.floor(cur / 2);
    }
  }

  return answer;
}

solution(6);
