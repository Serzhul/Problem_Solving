/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const s1 = "abcd";
const s2 = "dcba";

const areAlmostEqual = (s1, s2) => {
  const s1Map = {};
  let count = 0;

  [...s1].forEach((char) => {
    s1Map[char] = s1Map[char] ? s1Map[char] + 1 : 1;
  });

  for (let i = 0; i < s2.length; i += 1) {
    const char = s2[i];
    if (!s1Map[char]) return false;
    if (char !== s1[i]) count += 1;
    if (count >= 2) return false;
    s1Map[char] -= 1;
  }

  return true;
};

console.log(areAlmostEqual(s1, s2));
