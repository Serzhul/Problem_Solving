const k = 3;
const tasks = [1, 3, 5, 3, 1, 4];

function taskAssignment(k, tasks) {
  const completeOrder = [];

  const sorted = [...tasks].sort((a, b) => a - b);
  let members = k;
  let left = 0;
  let right = tasks.length - 1;

  while (members) {
    const min = sorted[left];
    const minIdx = tasks.indexOf(min);
    tasks[minIdx] = -1;

    const max = sorted[right];
    const maxIdx = tasks.indexOf(max);
    tasks[maxIdx] = -1;

    completeOrder.push([minIdx, maxIdx]);
    members -= 1;
    left += 1;
    right -= 1;
  }

  return completeOrder;
}

console.log(taskAssignment(k, tasks));
