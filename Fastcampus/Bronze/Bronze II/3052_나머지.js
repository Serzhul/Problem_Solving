const solution = (input) => {
  const [...numbers] = input.toString().trim().split("\n").map(Number);

  const set = new Set();

  for (let i = 0; i < numbers.length; i += 1) {
    set.add(numbers[i] % 42);
  }
  console.log(set.size);
};

solution(`39
40
41
42
43
44
82
83
84
85`);
