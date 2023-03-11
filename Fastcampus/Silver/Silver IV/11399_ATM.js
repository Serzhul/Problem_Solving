const solution = (input) => {
  const [N, people] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  people.sort((a, b) => a - b);

  let ans = 0;
  let sum = 0;

  for (let i = 0; i < people.length; i += 1) {
    sum += people[i];
    ans += sum;
  }

  console.log(ans);
};

solution(`5
3 1 4 3 2`);
