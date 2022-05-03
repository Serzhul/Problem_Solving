const solution = (input) => {
  const [N, numN, M, numM] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) =>
      i === 0 || i === 2 ? +el : el.split(" ").map((num) => +num)
    );

  const sorted = numN.sort((a, b) => a - b);

  let answer = "";

  for (let i = 0; i < M; i += 1) {
    let start = 0;
    let end = N - 1;
    let found = false;
    let mid = 0;

    const target = numM[i];

    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (sorted[mid] === target) {
        answer += "1\n";
        found = true;
        break;
      }

      if (sorted[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    if (!found) answer += "0\n";
  }

  console.log(answer);
};
solution(`5
4 1 5 2 3
5
1 3 7 9 5`);
