/**
 * @param {string} command
 * @return {string}
 */

// const command = "G()(al)";

// const command = "G()()()()(al)";

const command = "(al)G(al)()()G";

const interpret = (command) => {
  let res = "";

  for (let i = 0; i < command.length; i += 1) {
    if (command[i] === "G") {
      res += "G";
    } else if (command[i] === "(") {
      if (command[i + 1] === ")") {
        res += "o";
        i += 1;
      } else if (command[i + 1] === "a") {
        res += "al";
        i += 3;
      }
    }
  }

  return res;
};

console.log(interpret(command));
