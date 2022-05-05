const solution = (input) => {
  let s = input.toString().trim();

  let temp = "";

  let ck = false;

  let answer = "";

  for (let i = 0; i < s.length; i += 1) {
    const cur = s[i];

    if (cur === " ") {
      if (!ck) {
        answer += temp.split("").reverse().join("") + " ";
        temp = "";
      } else {
        answer += temp + " ";
        temp = "";
      }
    } else if (cur === "<") {
      if (!ck && temp !== "") {
        answer += temp.split("").reverse().join("");
        temp = "";
      } else {
        answer += temp;
        temp = "";
      }
      ck = true;

      answer += "<";
    } else if (cur === ">") {
      ck = false;
      answer += ">";
    } else {
      if (ck) {
        answer += cur;
      } else {
        temp += cur;
      }
    }
  }

  if (!ck) {
    answer += temp.split("").reverse().join("");
  }

  console.log(answer);
};

solution(`<   space   >space space space<    spa   c e>
`);
