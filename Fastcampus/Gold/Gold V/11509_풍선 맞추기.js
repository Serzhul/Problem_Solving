const solution = (input) => {
  const [N, balloons] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const arrows = Array.from({ length: N + 1 }, () => 0);
  let ans = 0;

  for (let i = 0; i < balloons.length; i += 1) {
    if (arrows[balloons[i]]) {
      arrows[balloons[i] - 1] += 1;
      arrows[balloons[i]] -= 1;
    } else {
      arrows[balloons[i] - 1] += 1;
      ans += 1;
    }
  }

  console.log(ans);
};

solution(`5
4 5 2 1 4`);
