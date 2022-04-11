function solution(n, info) {
  let scoreBoard = Array.from({ length: 11 }, () => 0);

  let maxDiff = Number.MIN_SAFE_INTEGER;

  function getBestScoreShots(aPoint, rPoint, usedArrows, curPoint, arr) {
    if (usedArrows > n) return;

    if (curPoint > 10) {
      const diff = rPoint - aPoint;

      if (maxDiff < diff) {
        const temp = [...arr];
        temp[10] = n - usedArrows;
        maxDiff = diff;
        scoreBoard = temp;
      }

      return;
    }

    if (n > usedArrows) {
      const cur = [...arr];
      const apeachArrows = info[10 - curPoint];
      cur[10 - curPoint] = apeachArrows + 1;
      getBestScoreShots(
        aPoint,
        rPoint + curPoint,
        usedArrows + apeachArrows + 1,
        curPoint + 1,
        cur
      );
    }

    if (info[10 - curPoint] > 0) {
      getBestScoreShots(
        aPoint + curPoint,
        rPoint,
        usedArrows,
        curPoint + 1,
        arr
      );
    } else {
      getBestScoreShots(aPoint, rPoint, usedArrows, curPoint + 1, arr);
    }
  }

  getBestScoreShots(0, 0, 0, 0, scoreBoard);

  return maxDiff <= 0 ? [-1] : scoreBoard;
}
solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
