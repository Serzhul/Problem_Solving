// 입찰
// 재건축에 필요한 시공사 선정을 위한 입찰
// 1~N번의 시공사가 입찰에 참여하였고, 각 시공사마다 인력 규모가 있을때, K명이 필요할 때 해당하는 시공사 찾기

let ans = 0;

const [N, K] = [10, 27];

function binarySearch(arr, target) {
  let start = 1;
  let end = N;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    console.log(`start: ${start} mid: ${arr[mid]} end: ${end} ans: ${ans}`);

    if (arr[mid][1] >= target) {
      if (arr[mid][1] === target) {
        ans = arr[mid][0];
      }

      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

const input = [1, 5, 30, 7, 10, 27, 15, 31, 26, 29];

const companies = input.map((el, idx) => [idx + 1, el]);

companies.sort((a, b) => a[1] - b[1]);

console.log(companies);

binarySearch(companies, K);

console.log(ans);
