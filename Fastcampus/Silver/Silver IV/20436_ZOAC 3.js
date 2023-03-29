const solution = (input) => {
  let [[sl, sr], [str]] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));

  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  let leftStart = [];
  let rightStart = [];

  const keyMap = {
    q: [0, 0, "con"],
    w: [0, 1, "con"],
    e: [0, 2, "con"],
    r: [0, 3, "con"],
    t: [0, 4, "con"],
    y: [0, 5, "vow"],
    u: [0, 6, "vow"],
    i: [0, 7, "vow"],
    o: [0, 8, "vow"],
    p: [0, 9, "vow"],
    a: [1, 0, "con"],
    s: [1, 1, "con"],
    d: [1, 2, "con"],
    f: [1, 3, "con"],
    g: [1, 4, "con"],
    h: [1, 5, "vow"],
    j: [1, 6, "vow"],
    k: [1, 7, "vow"],
    l: [1, 8, "vow"],
    z: [2, 0, "con"],
    x: [2, 1, "con"],
    c: [2, 2, "con"],
    v: [2, 3, "con"],
    b: [2, 4, "vow"],
    n: [2, 5, "vow"],
    m: [2, 6, "vow"],
  };

  for (let i = 0; i < keys.length; i += 1) {
    for (let j = 0; j < keys[i].length; j += 1) {
      if (sl === keys[i][j]) leftStart = [i, j];
      if (sr === keys[i][j]) rightStart = [i, j];
    }
  }

  let leftMin = Infinity;
  let rightMin = Infinity;

  function calDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  let [a, b] = leftStart;
  let [c, d] = rightStart;

  let time = 0;

  for (let i = 0; i < str.length; i += 1) {
    const cur = str[i];

    const [x, y, type] = keyMap[cur];

    const leftDist = calDistance(x, y, a, b);
    const rightDist = calDistance(x, y, c, d);

    if (type === "con") {
      time += leftDist;
      [a, b] = [x, y];
    } else {
      time += rightDist;
      [c, d] = [x, y];
    }
    time += 1;
  }

  console.log(time);
};

solution(`z o
zoac`);
