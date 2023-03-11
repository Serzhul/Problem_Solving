const solution = (input) => {
  const [N, ...coordinates] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let answer = "";

  coordinates.sort((a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;

    if (x1 > x2) return 1;
    if (x1 < x2) return -1;
    if (x1 === x2) {
      if (y1 > y2) return 1;
      if (y1 < y2) return -1;
    }

    return 0;
  });

  coordinates.forEach((coordinate) => {
    answer += `${coordinate[0]} ${coordinate[1]}\n`;
  });

  console.log(answer);
};

solution(`5
3 4
1 1
1 -1
2 2
3 3`);
