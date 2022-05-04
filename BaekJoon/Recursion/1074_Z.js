const solution = (input) => {
  const [N, r, c] = input
    .toString()
    .trim()
    .split(" ")
    .map((num) => Number(num));

  // Z는 0,0을 기준으로 x, y의 숫자

  // size는 사각형의 한 변의 길이
  function Z(sz, x, y) {
    if (sz === 1) return 0;

    sz /= 2; // 작은 4각형의 한 변의 길이는 전체 사각형의 길이를 2로 나눈 것

    for (let i = 0; i < 2; i += 1) {
      for (let j = 0; j < 2; j += 1) {
        // 현재 4개의 사각형 중 어디에
        if (x < sz * (i + 1) && y < sz * (j + 1)) {
          // 현재 좌표를 숫자로 나타낸 값
          return (2 * i + j) * sz ** 2 + Z(sz, x - sz * i, y - sz * j);
        }
      }
    }
  }

  console.log(Z(2 ** N, r, c));
};

solution(`3 7 7`);
