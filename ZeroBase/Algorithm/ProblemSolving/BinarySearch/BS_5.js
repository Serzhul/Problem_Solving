// 통나무 자르기
// N 개의 통나무를 잘라 총 길이가 일정하면서 정확하게 M개를 만들어내야 한다.

const [N, M] = [4, 11];

const trees = [802, 743, 457, 539];

trees.sort((a, b) => a - b);

let [start, end] = [1, Math.max(...trees)];

let ans = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  // 통나무를 mid로 잘랐을 때 얻을 수 있는 잘린 통나무의 합
  let count = 0;
  for (let i = 0; i < trees.length; i += 1) {
    const tree = trees[i];
    count += Math.floor(tree / mid);
  }

  if (count >= M) {
    start = mid + 1;

    if (count === M) {
      ans = Math.max(ans, mid);
    }
  } else {
    end = mid - 1;
  }
}

console.log(ans);
