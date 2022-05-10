const solution = (input) => {
  const D = Number(input.toString().trim());

  /* 0: 정보과학관
  1: 전산관
  2: 미래관
  3: 신앙관
  4: 한경직기념관
  5: 진리관
  6: 학생회관
  7: 형남공학관
 */

  // DP[i] = 각 건물에 도착하는 경우의 수;

  // 0분에 도착할 수 있는 상태
  let DP = [1, 0, 0, 0, 0, 0, 0, 0];

  // 인덱스가 안정해져있을 경우 자체적으로 적을 것

  const next = (state) => {
    const temp = Array(8).fill(0);

    temp[0] = state[1] + state[2];
    temp[1] = state[0] + state[2] + state[3];
    temp[2] = state[0] + state[1] + state[3] + state[4];
    temp[3] = state[1] + state[2] + state[4] + state[5];
    temp[4] = state[2] + state[3] + state[5] + state[7];
    temp[5] = state[3] + state[4] + state[6];
    temp[6] = state[5] + state[7];
    temp[7] = state[4] + state[6];

    for (let i = 0; i < 8; i += 1) {
      temp[i] %= 1000000007;
    }

    return temp;
  };

  for (let i = 0; i < D; i += 1) {
    DP = next(DP);
  }

  console.log(DP[0]);
};

solution(`10`);
