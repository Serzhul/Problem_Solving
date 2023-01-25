/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// const numCourses = 1;
// const prerequisites = [];

const numCourses = 4;
const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

const findOrder = (numCourses, prerequisites) => {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array.from({ length: numCourses }, () => 0);

  for (let i = 0; i < prerequisites.length; i += 1) {
    const [e, v] = prerequisites[i];

    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    indegree[e] += 1;
  }

  for (let i = 0; i < indegree.length; i += 1) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();

    if (graph.has(v)) {
      const course = graph.get(v);
      for (let i = 0; i < course.length; i += 1) {
        const e = course[i];
        indegree[e] -= 1;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length ? order : [];
};

console.log(findOrder(numCourses, prerequisites));
