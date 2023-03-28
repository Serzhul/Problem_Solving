const solution = (input) => {
  const [num] = input.toString().trim().split("\n");

  console.log(parseInt(num, 8).toString(2));
};

solution(`333,334`);
