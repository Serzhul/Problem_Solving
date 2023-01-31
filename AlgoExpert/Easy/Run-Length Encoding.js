// const string = "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA";
const string = "AAAAAAAAAAAAABBCCCCDD";

function runLengthEncoding(string) {
  let res = "";
  let cur = "";
  let count = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (cur === "") {
      cur = string[i];
      count += 1;
    } else if (cur === string[i]) {
      count += 1;
      if (count >= 10) {
        res += `9${cur}`;
        count -= 9;
      }
    } else {
      res += `${count}${cur}`;
      cur = string[i];
      count = 1;
    }
  }

  res += `${count}${cur}`;

  return res;
}

console.log(runLengthEncoding(string));
