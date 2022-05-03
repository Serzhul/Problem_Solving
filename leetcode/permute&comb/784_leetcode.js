const letterCasePermutation = (S) => {
  function attach(out, char) {
    const newOut = out.slice();

    for (let i = 0; i < out.length; i += 1) {
      newOut[i] += char;
    }

    return newOut;
  }

  function isAlpha(s) {
    return /[a-zA-Z]/.test(s);
  }

  let out = [];

  for (let char of S) {
    if (out.length === 0) {
      if (isAlpha(char)) {
        out.push(char.toUpperCase());
        out.push(char.toLowerCase());
      } else {
        out.push(char);
      }
    } else {
      if (isAlpha(char)) {
        const up = char.toUpperCase();
        const low = char.toLowerCase();
        out = attach(out, up).concat(attach(out, low));
      } else {
        out = attach(out, char);
      }
    }
  }

  return out;
};

console.log(letterCasePermutation("a1b2"));
