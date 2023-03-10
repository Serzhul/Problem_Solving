/* 문제 풀이 핵심 아이디어
1. 각 알파벳을 하나씩 확인한다.
2. a-z까지 총 26개의 알파벳
3. 각 알파벳에 대해 연속해서 등장한 횟수가 1번 인지 체크
*/

const solution = (input) => {
  const [N, ...testCases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el;
    });

  let answer = 0;

  for (let i = 0; i < testCases.length; i += 1) {
    const word = testCases[i];
    const checked = new Set();

    checked.add(word[0]);

    let isValid = true;

    for (let j = 1; j < word.length; j += 1) {
      const lastChar = word[j - 1];
      const curChar = word[j];

      if (lastChar !== curChar && checked.has(curChar)) {
        isValid = false;
        break;
      } else {
        checked.add(curChar);
      }
    }

    if (isValid) answer += 1;
  }

  console.log(answer);
};

solution(`3
aabbbccb
new
year`);
