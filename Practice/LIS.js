const arr = [6, 2, 5, 1, 7, 4, 8, 3];

function solution(arr) {
  const n = arr.length;

  const length = Array(n).fill(0);

  for (let i = 0; i < n; i += 1) {
    length[i] = 1;
    for (let j = 0; j < i; j += 1) {
      if (arr[j] < arr[i]) {
        length[i] = Math.max(length[i], length[j] + 1);
      }
    }
  }

  console.log(length);
}

solution(arr);
