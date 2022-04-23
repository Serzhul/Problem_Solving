const groupAnagrams = (strs) => {
  const map = {};

  for (let i = 0; i < strs.length; i += 1) {
    const sorted = [...strs[i]].sort((a, b) => a.localeCompare(b)).join("");
    if (map[sorted]) {
      map[sorted].push(i);
    } else map[sorted] = [i];
  }

  const answer = [];

  Object.values(map).forEach((val) => {
    const temp = [];

    val.forEach((num) => {
      temp.push(strs[Number(num)]);
    });
    answer.push(temp);
  });

  return answer;
};

groupAnagrams([
  "eat",
  "tea",
  "tan",
  "ate",
  "nat",
  "bat",
  "ac",
  "bd",
  "aac",
  "bbd",
  "aacc",
  "bbdd",
  "acc",
  "bdd",
]);
