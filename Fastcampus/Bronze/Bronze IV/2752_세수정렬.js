const solution = (input) => {
  let [nums] = input
    .toString()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  console.log(nums.sort((a, b) => a - b).join(" "));
};

solution(`3 1 2`);
