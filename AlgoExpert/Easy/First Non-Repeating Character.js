const string = "faadabcbbebdf";

function firstNonRepeatingCharacter(string) {
  const map = {};

  const stringArr = [...string];

  stringArr.forEach((char) => {
    map[char] = map[char] + 1 || 1;
  });

  const charMap = Object.entries(map);

  for (let i = 0; i < charMap.length; i += 1) {
    const [char, count] = charMap[i];

    if (count === 1) return stringArr.indexOf(char);
  }

  return -1;
}

console.log(firstNonRepeatingCharacter(string));
