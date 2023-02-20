const queue1 = [1, 2, 1, 2];
const queue2 = [1, 10, 1, 2];

function solution(queue1, queue2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < queue1.length; i += 1) {
    sum1 += queue1[i];
  }

  for (let j = 0; j < queue2.length; j += 1) {
    sum2 += queue2[j];
  }

  let [i1, i2] = [0, 0];

  let count = 0;
  const len = queue1.length;

  while (sum1 !== sum2) {
    if (count > len * 3) return -1;
    if (sum1 < sum2) {
      const shifted = queue2[i2];
      queue1.push(shifted);
      sum2 -= shifted;
      sum1 += shifted;
      i2 += 1;
    } else {
      const shifted = queue1[i1];
      queue2.push(shifted);
      sum1 -= shifted;
      sum2 += shifted;
      i1 += 1;
    }
    count += 1;
  }

  return count;
}

console.log(solution(queue1, queue2));
