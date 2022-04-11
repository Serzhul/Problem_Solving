function solution(arr) {
  const answer = [0, 0];

  const checkRect = (x, y, len) => {
    // 체크하는 길이가 1인 경우 마지막 값을 더하고 재귀 반복을 종료한다.
    if (len === 1) {
      answer[arr[x][y]] += 1;
      return;
    }

    let flag = true;

    for (let i = x; i < x + len; i += 1) {
      for (let j = y; j < y + len; j += 1) {
        if (arr[i][j] !== arr[x][y]) {
          flag = false;
          break;
        }
      }
    }

    // 만약 체크하는 값들이 모두 같다면 그 값을 1개 더하고 재귀를 종료한다.
    if (flag) {
      answer[arr[x][y]] += 1;
      return;
    }

    const divLen = len / 2;

    // 4단 계로 나눠서 재귀함수를 실행한다.

    checkRect(x, y, divLen);
    checkRect(x + divLen, y, divLen);
    checkRect(x, y + divLen, divLen);
    checkRect(x + divLen, y + divLen, divLen);
  };

  checkRect(0, 0, arr.length);

  return answer;
}

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);
