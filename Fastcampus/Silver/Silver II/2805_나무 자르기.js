const solution = (input) => {
  const [[N, M], heights] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let start = 0;
  let end = Math.max(...heights);

  let res = 0;

  // 높이가 올라가면 얻는 양을 감소
  // 높이가 내려가면 얻는 양이 증가

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let total = 0;

    heights.forEach((height) => {
      if (height > mid) total += height - mid;
    });

    if (total >= M) {
      res = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(res);
};

solution(`5 20
4 42 40 26 46`);
