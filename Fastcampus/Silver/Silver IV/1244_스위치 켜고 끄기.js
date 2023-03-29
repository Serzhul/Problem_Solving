const solution = (input) => {
  let [switchNum, status, studentNum, ...students] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0 || idx === 2) return Number(el);
      return el.split(" ").map(Number);
    });

  status = [-1, ...status];

  for (let i = 0; i < studentNum; i += 1) {
    const [sex, num] = students[i];

    if (sex === 1) {
      let target = num;
      while (target <= switchNum) {
        status[target] = status[target] ? 0 : 1;
        target += num;
      }
    } else {
      let start = num - 1;
      let end = num + 1;

      status[num] = status[num] ? 0 : 1;

      while (start >= 1 && end <= switchNum) {
        if (status[start] !== status[end]) break;
        status[start] = status[start] ? 0 : 1;
        status[end] = status[end] ? 0 : 1;
        start -= 1;
        end += 1;
      }
    }
  }

  let ans = "";

  for (let i = 1; i <= switchNum; i += 1) {
    ans += `${status[i]} `;
    if (i % 20 === 0) {
      ans += `\n`;
    }
  }

  console.log(ans);
};

solution(`9
0 1 0 1 0 0 0 1 1
2
1 3
2 3`);
