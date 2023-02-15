const weights = [100, 180, 360, 100, 270];

function solution(weights) {
  const weightMap = {};
  let count = 0;

  const positions = [
    [2, 3],
    [2, 4],
    [3, 2],
    [3, 4],
    [4, 2],
    [4, 3],
  ];

  weights.forEach((weight) => {
    weightMap[weight] = weightMap[weight] + 1 || 1;
  });

  const mapKeys = Object.keys(weightMap);

  for (let i = 0; i < mapKeys.length; i += 1) {
    const mapKey = mapKeys[i];

    if (weightMap[mapKey] > 1) {
      count += (weightMap[mapKey] * (weightMap[mapKey] - 1)) / 2;
    }

    for (let j = 0; j < positions.length; j += 1) {
      const [pos1, pos2] = positions[j];

      const target = (mapKey * pos1) / pos2;

      if (weightMap[target]) count += weightMap[mapKey] * weightMap[target];
    }

    weightMap[mapKey] = 0;
  }

  return count;
}

console.log(solution(weights));
