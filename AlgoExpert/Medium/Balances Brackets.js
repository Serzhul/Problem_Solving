const string = "(a)";

function balancedBrackets(string) {
  const openingBracket = "([{";
  const closingBracket = ")]}";
  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    if (openingBracket.includes(char)) {
      stack.push(char);
    } else if (closingBracket.includes(char)) {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === matchingBrackets[char]) stack.pop();
      else return false;
    }
  }

  return stack.length === 0;
}

console.log(balancedBrackets(string));
