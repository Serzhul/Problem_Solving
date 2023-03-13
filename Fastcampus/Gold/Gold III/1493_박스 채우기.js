// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

const solution = (input) => {
  const [[length, width, height], N, ...cubes] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 1) return Number(el);
      return el.split(" ").map(Number);
    });

  const calCubes = Array(20).fill(0);

  for (let i = 0; i < cubes.length; i += 1) {
    calCubes[cubes[i][0]] = cubes[i][1];
  }

  let size = 19;
  size = nearestSquare(length);
  size = Math.min(size, nearestSquare(width));
  size = Math.min(size, nearestSquare(height));

  let res = 0;
  let used = 0;

  for (let i = size; i >= 0; i -= 1) {
    used *= 8; // 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
    const cur = 2 ** i; // 현재의 정육면체 큐브의 길이

    // 채워넣어야 할 큐브의 개수 계산
    const required =
      parseInt(length / cur, 10) *
        parseInt(width / cur, 10) *
        parseInt(height / cur, 10) -
      used;

    const usage = Math.min(required, calCubes[i]);

    res += usage;
    used += usage;
  }

  if (used === length * width * height) console.log(res);
  else console.log(-1);
};

solution(`37 42 59
6
0 143821
1 14382
2 1438
3 143
4 14
5 1`);
