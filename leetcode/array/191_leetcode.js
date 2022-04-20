// Binary String으로 변환했을 때 1의 개수 구하기

// Solution 1

function hammingWeight(n) {
  return [...n.toString(2)].reduce((acc, cur) => {
    if (cur === "1") acc += 1;
    return acc;
  }, 0);
}

hammingWeight(11);
