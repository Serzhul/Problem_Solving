const relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

const getCombinations = (array) => {
  const combArr = [];

  const getComb = (arr, pick, prefix = []) => {
    if (pick === 0) {
      combArr.push([...prefix]);
      return null;
    }

    return arr.flatMap((v, i) =>
      getComb(arr.slice(i + 1), pick - 1, [...prefix, v])
    );
  };

  for (let i = 1; i <= array.length; i += 1) {
    getComb(array, i);
  }

  return combArr;
};

const checkUniques = (relation, combinations) => {
  const results = [];

  combinations.forEach((combination) => {
    const set = new Set();

    relation.forEach((rel) => {
      set.add(combination.map((comb) => rel[comb]).join(","));
    });

    if (set.size === relation.length) results.push(combination);
  });

  return results;
};

function checkMinimality(combinations) {
  const results = [];

  while (combinations.length) {
    results.push(combinations[0]);
    combinations = combinations.reduce((acc, cur) => {
      console.log(combinations[0], cur);
      const notMinimal = combinations[0].every((combination) =>
        cur.includes(combination)
      );

      if (!notMinimal) acc.push(cur);

      return acc;
    }, []);
  }

  return results;
}

function solution(relation) {
  const idxArr = Array.from({ length: relation[0].length }, (_, i) => i);

  const combinations = getCombinations(idxArr);
  const uniqueRelations = checkUniques(relation, combinations);
  const miniMals = checkMinimality(uniqueRelations);

  return miniMals.length;
}

console.log(solution(relation));
