const solution = (input) => {
  const [N, ...members] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map((info, idx) => {
        if (idx === 0) return Number(info);
        return info;
      });
    });

  members.sort((a, b) => a[0] - b[0]);
  let answer = "";

  members.forEach((member) => {
    answer += `${member[0]} ${member[1]}\n`;
  });

  console.log(answer);
};

solution(`3
21 Junkyu
21 Dohyun
20 Sunyoung`);
