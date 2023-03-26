// const solution = (input) => {
//   const [N, ...members] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split(" ").map((info, idx) => {
//         if (idx === 0) return Number(info);
//         return info;
//       });
//     });

//   members.sort((a, b) => a[0] - b[0]);
//   let answer = "";

//   members.forEach((member) => {
//     answer += `${member[0]} ${member[1]}\n`;
//   });

//   console.log(answer);
// };

// 복습
// 입력은 가입한 순서대로 주어지므로, 나이 순으로만 정렬하고 나면 정렬 순서가 유지되기 떄문에 따로 설정해줄 필요 없다.
const solution = (input) => {
  const [N, ...members] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map((info, index) => {
        if (index === 0) return Number(info);
        return info;
      });
    });

  members.sort((a, b) => {
    const [age1, name1] = a;
    const [age2, name2] = b;

    if (age1 < age2) return -1;
    if (age1 > age2) return 1;
    return 0;
  });

  let answer = "";

  members.forEach((member) => {
    answer += `${member.join(" ")}\n`;
  });

  console.log(answer);
};

solution(`3
21 Junkyu
21 Dohyun
22 Dohyun
23 Dohyun
20 Sunyoung`);
