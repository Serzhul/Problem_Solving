const solution = (input) => {
  const [N, grades] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  console.log(Math.max(...grades) - Math.min(...grades));
};

solution(`8
85 42 79 95 37 11 72 32`);
