// 문자열 중 k번을 아무 대문자로 바꿀 수 있고, 그 작업을 통해 문자가 연속되는 최대 문자열의 길이를 구하는 문제

const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCount = 0;

  const map = {};

  while (right < s.length) {
    const char = s[right];
    const windowSize = right - left + 1;
    map[char] = (map[char] || 0) + 1;

    if (map[char] > maxCount) maxCount = map[char];

    if (windowSize - maxCount > k) {
      map[s[left]] -= 1;
      left += 1;
    }

    right += 1;
  }

  return right - left;
};

console.log(characterReplacement("ABAB", 2));
