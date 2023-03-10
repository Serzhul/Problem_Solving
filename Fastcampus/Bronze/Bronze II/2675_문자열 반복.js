const solution = (input) => {
  const [T, ...testCases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ");
    });

  let answer = "";

  for (let i = 0; i < testCases.length; i += 1) {
    const [repeatNum, repeatStr] = testCases[i];

    for (let j = 0; j < repeatStr.length; j += 1) {
      answer += `${repeatStr[j].repeat(repeatNum)}`;
    }

    answer += "\n";
  }

  console.log(answer);
};

solution(`2
3 ABC
5 /HTP`);
