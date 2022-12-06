// 수열의 두 수 X,Y가 있을때,
// 1) X가 Y보다 수열에서 많이 등장하는 경우 => X가 Y보다 앞에
// 2) 등장하는 횟수가 같다면 => X,Y 중 작은 값이 앞에
// 알고리즘 => Counting Sort 사용 가능

const arr = [11, 33, 11, 77, 54, 11, 25, 25, 33];

const map = new Map();

arr.forEach((key) =>
  map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1)
);

const sortedData = [...map.entries()].sort();

const ret = [];

sortedData.forEach(([key, value]) => {
  for (let i = 0; i < value; i += 1) {
    ret.push(key);
  }
});

console.log(ret);
