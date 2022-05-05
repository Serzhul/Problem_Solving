const solution = (input) => {
  let [N, ...prices] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) =>
      i === 0 ? Number(el) : el.split(" ").map((num) => Number(num))
    );

  const dx = [0, 0, 1, 0, -1];
  const dy = [0, 1, 0, -1, 0];

  let answer = 10000;

  const canFlower = (arr) => {
    let ret = 0;

    const flow = [];

    for (let i = 0; i < arr.length; i += 1) {
      // 2차원 배열의 1차원 배열화
      const x = Math.floor(arr[i] / N);
      const y = arr[i] % N;

      if (x === 0 || x === N - 1 || y === 0 || y === N - 1) return 10000;

      for (let j = 0; j < 5; j += 1) {
        flow.push(`${x + dx[j]}${y + dy[j]}`);
        ret += prices[x + dx[j]][y + dy[j]];
      }
    }

    if (new Set(flow).size !== 15) return 10000;
    return ret;
  };

  for (let i = 0; i < N ** 2; i += 1) {
    for (let j = i + 1; j < N ** 2; j += 1) {
      for (let k = j + 1; k < N ** 2; k += 1) {
        answer = Math.min(canFlower([i, j, k]), answer);
      }
    }
  }

  console.log(answer);
};

solution(`6
1 0 2 3 3 4
1 1 1 1 1 1
0 0 1 1 1 1
3 9 9 0 1 99
9 11 3 1 0 3
12 3 0 0 0 1`);
