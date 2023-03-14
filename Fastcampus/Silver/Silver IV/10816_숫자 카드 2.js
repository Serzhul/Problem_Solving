function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

function upperBound(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

const solution = (input) => {
  const [...data] = input.toString().trim().split("\n");

  const N = Number(data[0]);
  const M = Number(data[2]);
  const nNum = data[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const mNum = data[3].split(" ").map(Number);

  let ans = "";

  for (let i = 0; i < M; i += 1) {
    const lowerIdx = lowerBound(nNum, mNum[i]);
    const upperIdx = upperBound(nNum, mNum[i]);

    ans += `${upperIdx - lowerIdx} `;
  }

  console.log(ans);
};

solution(`10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`);
