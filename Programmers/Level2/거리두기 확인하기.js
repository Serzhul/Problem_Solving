function solution(places) {
  const classRooms = places.map((place) => place.map((seat) => seat.split("")));

  const m = 5;
  const n = 5;

  const getMH = (d1, d2) => {
    const [r1, c1] = d1;
    const [r2, c2] = d2;

    return Math.abs(r1 - r2) + Math.abs(c1 - c2);
  };

  const answer = [];

  const checkEmptyTable = (classRoom, d1, d2) => {
    const [r1, c1] = d1;
    const [r2, c2] = d2;

    for (let i = Math.min(r1, r2); i < Math.max(r1, r2); i += 1) {
      for (let j = Math.min(c1, c2); j < Math.max(c1, c2); j += 1) {
        if (classRoom[i][j] === "O") return true;
      }
    }

    return false;
  };

  const checkIsClear = (classRoom, students) => {
    for (let j = 0; j < students.length; j += 1) {
      for (let k = j + 1; k < students.length; k += 1) {
        const mh = getMH(students[j], students[k]);

        if (mh <= 1) return false;

        if (mh === 2) {
          if (checkEmptyTable(classRoom, students[j], students[k])) {
            return false;
          }
        }
      }
    }

    return true;
  };

  for (let i = 0; i < classRooms.length; i += 1) {
    let isClear = true;
    const classRoom = classRooms[i];

    const students = [];

    for (let j = 0; j < m; j += 1) {
      for (let k = 0; k < n; k += 1) {
        if (classRoom[j][k] === "P") {
          students.push([j, k]);
        }
      }
    }

    isClear = checkIsClear(classRoom, students);

    isClear ? answer.push(1) : answer.push(0);
  }

  console.log(answer);
  return answer;
}

solution([
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);
