const want = ["apple"];
const number = [10];

const discount = [
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
];

const canPurchaseAll = (map, arr, num) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!map[arr[i]]) return false;
    if (map[arr[i]] < num[i]) return false;
  }

  return true;
};

function solution(want, number, discount) {
  let daySum = 0;
  const len = discount.length;
  const foodMap = {};

  for (let i = 0; i < 10; i += 1) {
    if (discount[i]) foodMap[discount[i]] = foodMap[discount[i]] + 1 || 1;
  }

  if (canPurchaseAll(foodMap, want, number)) daySum += 1;

  for (let i = 10; i < len; i += 1) {
    foodMap[discount[i - 10]] -= 1;
    foodMap[discount[i]] = foodMap[discount[i]] + 1 || 1;
    if (canPurchaseAll(foodMap, want, number)) daySum += 1;
  }

  return daySum;
}

console.log(solution(want, number, discount));
