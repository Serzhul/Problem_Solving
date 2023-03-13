function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

const solution = (input) => {
  const [N, ...strings] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el;
    });

  for (let i = 0; i < strings.length; i += 1) {
    const str = strings[i];

    if (isPalindrome(str)) console.log(0);
    else {
      let found = false;
      let len = str.length;

      for (let j = 0; j < Math.floor(len / 2); j += 1) {
        if (str[j] !== str[len - j - 1]) {
          if (isPalindrome(str.slice(0, j) + str.slice(j + 1, len)))
            found = true;
          if (isPalindrome(str.slice(0, len - j - 1) + str.slice(len - j, len)))
            found = true;
          break;
        }
      }
      if (found) console.log(1);
      else console.log(2);
    }
  }
};

solution(`7
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc`);
