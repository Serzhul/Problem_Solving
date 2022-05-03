const solution = (input) => {
  const [[N, M], ...girlGroup] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) => (i === 0 ? el.split(" ") : el));

  const teamByMember = new Map();

  const memberByTeam = new Map();

  let groupCount = 0;

  while (groupCount < N) {
    const [groupName, groupMember] = girlGroup.splice(0, 2);

    const members = girlGroup.splice(0, Number(groupMember));

    teamByMember.set(groupName, members);

    members.forEach((member) => {
      memberByTeam.set(member, groupName);
    });

    groupCount += 1;
  }

  let answer = "";

  while (girlGroup.length > 0) {
    const [condition, type] = girlGroup.splice(0, 2);

    if (Number(type) === 0) {
      // 팀
      answer += teamByMember
        .get(condition)
        .sort((a, b) => a.localeCompare(b))
        .join("\n");
      answer += "\n";
    }

    if (Number(type) === 1) {
      // 멤버
      answer += `${memberByTeam.get(condition)}\n`;
    }
  }

  console.log(answer);
};
solution(`3 4
twice
9
jihyo
dahyeon
mina
momo
chaeyoung
jeongyeon
tzuyu
sana
nayeon
blackpink
4
jisu
lisa
rose
jenny
redvelvet
5
wendy
irene
seulgi
yeri
joy
sana
1
wendy
1
twice
0
rose
1`);
