const solution = (input) => {
  const [N, nums, M, ...sections] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0 || idx === 2) return Number(el);
      return el.split(" ").map(Number);
    });

  const prefixSum = [0];

  let acc = 0;

  for (let i = 0; i < N; i += 1) {
    acc += nums[i];
    prefixSum.push(acc);
  }

  let ans = "";

  for (let i = 0; i < M; i += 1) {
    const [left, right] = sections[i];

    ans += `${prefixSum[right] - prefixSum[left - 1]}\n`;
  }

  console.log(ans)
};

solution(`5
10 20 30 40 50
5
1 3
2 4
3 5
1 5
4 4`);
