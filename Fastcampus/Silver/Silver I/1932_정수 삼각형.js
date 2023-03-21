const solution = (input) => {
  const [T, ...triangles] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  for (let i = 1; i < triangles.length; i += 1) {
    for (let j = 0; j < triangles[i].length; j += 1) {
      if (j === 0) {
        triangles[i][j] += triangles[i - 1][j];
      } else if (j === triangles[i].length - 1) {
        triangles[i][j] += triangles[i - 1][j - 1];
      } else {
        triangles[i][j] += Math.max(
          triangles[i - 1][j],
          triangles[i - 1][j - 1]
        );
      }
    }
  }

  console.log(Math.max(...triangles[T - 1]));
};

solution(`1
7`);
