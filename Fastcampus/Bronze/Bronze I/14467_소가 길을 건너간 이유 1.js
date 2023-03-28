const solution = (input) => {
  const [N, ...results] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const map = {};
  let count = 0;

  for (let i = 0; i < results.length; i += 1) {
    const [ox, path] = results[i];

    if (map[ox] === undefined) map[ox] = path;
    else if (map[ox] !== path) {
      count += 1;
      map[ox] = path;
    }
  }

  console.log(count);
};

solution(`8
3 1
3 0
6 0
2 1
4 1
3 0
4 0
3 1`);
