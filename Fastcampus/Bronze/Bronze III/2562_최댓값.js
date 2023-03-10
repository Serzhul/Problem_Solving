const solution = (input) => {
  const [...numbers] = input.toString().trim().split("\n").map(Number);

  let maxVal = 0;
  let maxIdx = 0;

  let answer = "";

  for (let i = 0; i < numbers.length; i += 1) {
    if (maxVal < numbers[i]) {
      maxIdx = i + 1;
      maxVal = numbers[i];
    }
  }

  answer += `${maxVal}\n`;
  answer += maxIdx;

  console.log(answer);
};

solution(`3
29
38
12
57
74
40
85
61`);
