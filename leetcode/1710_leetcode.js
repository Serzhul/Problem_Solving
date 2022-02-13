var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => (a[1] >= b[1] ? (a[1] > b[1] ? -1 : 0) : 1));

  let loaded = [];
  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize >= boxTypes[i][0]) {
      truckSize -= boxTypes[i][0];
      loaded.push(boxTypes[i]);
    } else {
      loaded.push([truckSize, boxTypes[i][1]]);
      break;
    }
  }

  return loaded.reduce((acc, cur) => {
    const [boxType, boxUnit] = cur;
    acc += boxType * boxUnit;
    return acc;
  }, 0);
};

console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);
