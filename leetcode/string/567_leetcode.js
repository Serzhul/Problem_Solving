const checkInclusion = (s1, s2) => {
  const map = new Map();

  [...s1].forEach((char) => {
    map.set(char, map.get(char) + 1 || 1);
  });

  let start = 0; // 시작 인덱스

  const windowSize = s1.length; // 슬라이딩 윈도우의 크기

  let counter = map.size; // 모아야 하는 문자 수

  for (let end = 0; end < s2.length; end += 1) {
    const char = s2[end];

    if (map.has(char)) map.set(char, map.get(char) - 1);

    if (map.get(char) === 0) counter -= 1;

    while (counter === 0) {
      if (end - start + 1 === windowSize) return true;

      if (map.has(s2[start])) map.set(s2[start], map.get(s2[start]) + 1);

      if (map.get(s2[start]) === 1) counter += 1;

      start += 1;
    }
  }

  return false;
};

console.log(checkInclusion("adc", "dcda"));
