const solution = (input) => {
  const [T, ...cases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let ans = "";

  for (let i = 0; i < cases.length - 1; i += 1) {
    const max = Math.max(...cases[i + 1]);
    const min = Math.min(...cases[i + 1]);
    ans += `${min} ${max}\n`;
    i += 1;
  }

  console.log(ans);
};

solution(`3
5
20 28 22 25 21
5
30 21 17 25 29
5
20 10 35 30 7`);
