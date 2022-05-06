function solution(s) {
  const map = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let cur = "";

  let answer = "";

  [...s].forEach((char) => {
    if (map[cur] !== undefined) {
      answer += `${map[cur]}`;
      cur = "";
    } else if (Number.isNaN(Number(char))) {
      cur += char;
      if (map[cur] !== undefined) {
        answer += `${map[cur]}`;
        cur = "";
      }
    } else answer += char;
  });

  return Number(answer);
}

solution("123");
