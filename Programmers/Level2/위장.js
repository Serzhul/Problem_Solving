function solution(clothes) {
  let answer = 1;
  const clotheObj = {};

  clothes.forEach((clothe) => {
    clotheObj[clothe[1]] = (clotheObj[clothe[1]] || 1) + 1; // 안입을 경우 계산해야 하므로 + 1
  });

  answer = Object.values(clotheObj).reduce((acc, cur) => acc * cur, 1);

  return answer - 1;
}

solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
