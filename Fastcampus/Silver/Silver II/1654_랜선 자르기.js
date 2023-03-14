const solution = (input) => {
  const [[K, N], ...lans] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return el.split(" ").map(Number);
      return Number(el);
    });

  let start = 1;
  let end = Math.max(...lans);

  let res = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let total = 0;

    lans.forEach((lan) => {
      total += Math.floor(lan / mid);
    });

    if (total >= N) {
      res = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(res);
};

solution(`1 10
802`);
