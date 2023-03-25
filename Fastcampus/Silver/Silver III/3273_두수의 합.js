const solution = (input) => {
  const [n, nums, x] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 1) return el.split(" ").map(Number);
      return Number(el);
    });

  nums.sort((a, b) => a - b);

  let start = 0;
  let end = n - 1;

  let count = 0;

  while (start < end) {
    const sum = nums[start] + nums[end];

    if (sum === x) count += 1;

    if (sum < x) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  console.log(count);
};

solution(`9
5 12 7 10 9 1 2 3 11
13`);
