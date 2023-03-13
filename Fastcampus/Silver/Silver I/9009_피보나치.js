const solution = (input) => {
  const [T, ...cases] = input.toString().trim().split("\n").map(Number);

  let ans = "";

  for (let i = 0; i < cases.length; i += 1) {
    let num = cases[i];
    let idx = 2;

    const arr = [];

    arr[0] = 0;
    arr[1] = 1;

    while (true) {
      if (arr[idx - 1] + arr[idx - 2] > num) break;
      arr[idx] = arr[idx - 1] + arr[idx - 2];
      idx += 1;
    }

    const res = [];

    for (let j = arr.length - 1; j > 0; j -= 1) {
      if (num >= arr[j]) {
        res.push(arr[j]);
        num -= arr[j];
      }
    }

    ans += `${res.reverse().join(" ")}\n`;
  }

  console.log(ans);
};

solution(`4
100
200
12345
1003`);
