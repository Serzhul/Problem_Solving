// 반복하지 않는 문자가 없는 문자열중 가장 길이가 긴 문자들 구하기

// Solution 1 : 실패
// const lengthOfLongestSubstring = (s) => {
//   let maxLenStr = "";

//   let curStr = "";

//   for (let i = 0; i < s.length; i += 1) {
//     if (curStr === "") curStr += s[i];
//     else if ([...curStr].includes(s[i])) {
//       if (curStr.length > maxLenStr.length) maxLenStr = curStr;
//       curStr = s[i];
//     } else {
//       curStr += s[i];
//       if (curStr.length > maxLenStr.length) {
//         maxLenStr = curStr;
//       }
//     }
//   }

//   if (curStr.length > maxLenStr.length) {
//     maxLenStr = curStr;
//   }

//   return maxLenStr.length;
// };

const lengthOfLongestSubstring = (s) => {
  const sLen = s.length;
  let maxLen = 0;
  let maxStr = "";
  let curStr = "";
  let postIdx = "";

  for (let i = 0; i < sLen; i += 1) {
    curStr = s[i];
    postIdx = maxStr.indexOf(curStr);

    if (postIdx > -1) {
      maxStr = maxStr.substring(postIdx + 1); // 문자열 제거
    }

    maxStr += curStr; // 뒤에 추가
    maxLen = Math.max(maxLen, maxStr.length); // 최대 길이 갱신
  }

  return maxLen;
};

lengthOfLongestSubstring("abcabcbb");
