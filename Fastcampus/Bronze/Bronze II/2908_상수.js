const solution = (input) => {
  const [A, B] = input.toString().trim().split(" ");

  const reverseA = Number([...A].reverse().join(""));
  const reverseB = Number([...B].reverse().join(""));

  console.log(Math.max(reverseA, reverseB));
};

solution(`839 237`);
