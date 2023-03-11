const solution = (input) => {
  const [N, nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const uniqueArr = [...new Set(nums)];

  uniqueArr.sort((a, b) => a - b);

  const numsMap = new Map();
  for (let i = 0; i < uniqueArr.length; i += 1) {
    numsMap.set(uniqueArr[i], i);
  }

  let answer = "";

  nums.forEach((num) => {
    answer += `${numsMap.get(num)} `;
  });

  console.log(answer);
};

solution(`6
1000 999 1000 999 1000 999`);
