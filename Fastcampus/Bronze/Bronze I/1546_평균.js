const solution = (input) => {
  let [N, grades] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });
  const max = Math.max(...grades);

  grades = grades.map((grade) => (grade / max) * 100);

  let newAvg = 0;

  grades.forEach((grade) => {
    newAvg += grade;
  });

  newAvg /= N;

  console.log(newAvg);
};

solution(`4
1 100 100 100`);
