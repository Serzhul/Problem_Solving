var findLeastNumOfUniqueInts = function (arr, k) {
  const nMap = new Map();

  for (const num of arr) {
    nMap.set(num, nMap.get(num) + 1 || 1);
  }

  const mapSorted = [...nMap.entries()].sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < mapSorted.length; i++) {
    if (k >= mapSorted[i][1]) k -= mapSorted[i][1];
    else {
      return mapSorted.length - i;
    }
  }
};

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));
