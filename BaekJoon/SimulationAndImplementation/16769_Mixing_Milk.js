const solution = (input) => {
  let [[c1, m1], [c2, m2], [c3, m3]] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map((num) => Number(num)));

  let count = 1;

  const moveMilf = (bucket1, bucket2, milk1, milk2) => {
    // bucket1 : 옮기고자 하는 버킷 , buket2 : 옮겨질 버킷 , milk1 : bucket1에 남은 우유, milk2 : bucket2에 남은 우유

    const canMove = bucket2 - milk2;

    if (milk1 <= canMove) {
      milk2 += milk1;
      milk1 = 0;
    } else if (canMove === bucket2) {
      milk2 += canMove;
      milk1 -= canMove;
    } else if (canMove !== 0) {
      milk1 -= canMove;
      milk2 += canMove;
    }

    return [milk1, milk2];
  };

  while (count <= 100) {
    if (count % 3 === 1) {
      [m1, m2] = moveMilf(c1, c2, m1, m2);
    } else if (count % 3 === 2) {
      [m2, m3] = moveMilf(c2, c3, m2, m3);
    } else {
      [m3, m1] = moveMilf(c3, c1, m3, m1);
    }

    count += 1;
  }

  let answer = "";

  answer += `${m1}\n`;
  answer += `${m2}\n`;
  answer += `${m3}`;

  console.log(answer);
};

solution(`10 3
11 4
12 5`);
