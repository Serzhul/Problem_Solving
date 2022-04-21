const isValid = (s) => {
  const stack = [];

  [...s].forEach((char) => {
    if (stack.length === 0) stack.push(char);
    else {
      const last = stack[stack.length - 1];
      if (
        (last === "(" && char === ")") ||
        (last === "{" && char === "}") ||
        (last === "[" && char === "]")
      ) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  });

  return stack.length === 0;
};

isValid("{]");
