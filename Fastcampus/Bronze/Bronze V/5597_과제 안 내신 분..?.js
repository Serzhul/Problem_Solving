const solution = (input) => {
  const [...students] = input.toString().trim().split("\n").map(Number);

  const map = {};

  let ans = "";

  for (let i = 0; i < students.length; i += 1) {
    map[students[i]] = 1;
  }

  for (let i = 1; i <= 30; i += 1) {
    if (!map[i]) ans += `${i}\n`;
  }

  console.log(ans);
};

solution(`3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`);
