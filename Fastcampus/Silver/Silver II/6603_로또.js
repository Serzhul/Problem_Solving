const solution = (input) => {
  const [...cases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let ans = "";
  const getComb = (arr, pickNum, prefix = []) => {
    if (pickNum === 0) {
      ans += `${prefix.join(" ")}\n`;
      return;
    }

    return arr.flatMap((v, i) =>
      getComb(arr.slice(i + 1), pickNum - 1, [...prefix, v])
    );
  };

  for (let i = 0; i < cases.length; i += 1) {
    const caseLen = cases[i][0];
    const numbers = cases[i].slice(1);

    getComb(numbers, 6);
    ans += "\n";
  }

  console.log(ans);
};

solution(`7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`);
