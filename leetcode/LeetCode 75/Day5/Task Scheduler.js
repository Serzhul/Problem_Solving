/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

const tasks = ["A", "A", "A", "B", "B", "B"];
const n = 2;

// const tasks = ["A", "A", "A", "B", "B", "B"];
// const n = 0;

// const tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"];
// const n = 2;

const leastInterval = (tasks, n) => {
  const taskMap = new Map();

  // 태스크의 최대 빈도 수
  let maxNum = 0;

  // 최대 빈도수를 가진 태스크의 개수
  let maxValCount = 0;

  tasks.forEach((k) => {
    const tNum = taskMap.has(k) ? taskMap.get(k) + 1 : 1;

    taskMap.set(k, tNum);

    // 만약 태스크의 개수가 최대 개수보다 많으면 갱신하고, 카운트 증가
    if (tNum > maxNum) {
      maxNum = tNum;
      maxValCount = 1;
    } else if (tNum === maxNum) {
      maxValCount += 1;
    }
  });

  return Math.max(tasks.length, (maxNum - 1) * (n + 1) + maxValCount);
};

leastInterval(tasks, n);
