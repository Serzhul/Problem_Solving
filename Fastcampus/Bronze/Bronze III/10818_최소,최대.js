const solution = (input) => {
  const [N, [...numbers]] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let minValue = 1000001;
  let maxValue = -1000001;

  for (let i = 0; i < N; i += 1) {
    if (minValue > numbers[i]) minValue = numbers[i];
    if (maxValue < numbers[i]) maxValue = numbers[i];
  }

  console.log(`${minValue} ${maxValue}`);

  //   console.log(`${Math.min(...numbers)} ${Math.max(...numbers)} `);
};

solution(`5
20 10 35 30 7`);
