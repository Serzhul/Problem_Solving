const solution = (input) => {
  const data = input.toString().split("\n");

  const [N, M] = data[0].split(" ").map(Number);
  const A = data[1].split(" ").map(Number);
  const B = data[2].split(" ").map(Number);

  let left = 0;
  let right = 0;

  const res = [];

  while (left < N && right < M) {
    if (A[left] < B[right]) {
      res.push(A[left]);
      left += 1;
    } else {
      res.push(B[right]);
      right += 1;
    }
  }

  while (left < N) {
    res.push(A[left]);
    left += 1;
  }

  while (right < M) {
    res.push(B[right]);
    right += 1;
  }

  console.log(res.join(" "));
};

solution(`4 3
2 3 5 9
1 4 7`);
