const solution = (input) => {
  const [C, ...testCases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let answer = "";

  for (let i = 0; i < testCases.length; i += 1) {
    const [studentNumber, ...students] = testCases[i];
    let avg = 0;
    let avgOverStudents = 0;

    for (let j = 0; j < students.length; j += 1) {
      avg += students[j];
    }

    avg /= studentNumber;
    avgOverStudents = students.filter((grade) => grade > avg).length;

    answer += `${((avgOverStudents / studentNumber) * 100).toFixed(3)}%\n`;
  }

  console.log(answer);
};

solution(`5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`);
