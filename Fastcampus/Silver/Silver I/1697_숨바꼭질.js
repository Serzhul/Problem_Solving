// class Queue {
//   constructor() {
//     this.items = {};
//     this.headIdx = 0;
//     this.tailIdx = 0;
//   }

//   enqueue(item) {
//     this.items[this.tailIdx] = item;
//     this.tailIdx += 1;
//   }

//   dequeue() {
//     const item = this.items[this.headIdx];
//     delete this.items[this.headIdx];
//     this.headIdx += 1;
//     return item;
//   }

//   peek() {
//     return this.items[this.headIdx];
//   }

//   getLength() {
//     return this.tailIdx - this.headIdx;
//   }
// }

class Queue {
  constructor() {
    this.items = {};
    this.headIdx = 0;
    this.tailIdx = 0;
  }

  enqueue(item) {
    this.items[this.tailIdx] = item;
    this.tailIdx += 1;
  }

  dequeue() {
    const item = this.items[this.headIdx];
    delete this.items[this.headIdx];
    this.headIdx += 1;

    return item;
  }

  peek() {
    return this.items[this.headIdx];
  }

  size() {
    return this.tailIdx - this.headIdx;
  }
}

// const solution = (input) => {
//   const [N, K] = input.toString().trim().split(" ").map(Number);

//   const queue = new Queue();

//   const MAX = 100001;

//   const visited = Array(MAX).fill(0);

//   queue.enqueue(N);

//   while (queue.getLength() !== 0) {
//     const cur = queue.dequeue();
//     if (cur === K) {
//       console.log(visited[cur]);
//       return;
//     }
//     const nextNodes = [cur - 1, cur + 1, cur * 2];

//     for (let i = 0; i < nextNodes.length; i += 1) {
//       const nextNode = nextNodes[i];
//       if (nextNode >= 0 && nextNode < MAX) {
//         if (!visited[nextNode]) {
//           visited[nextNode] = visited[cur] + 1;
//           queue.enqueue(nextNode);
//         }
//       }
//     }
//   }
// };

const solution = (input) => {
  const [N, K] = input.toString().trim().split(" ").map(Number);

  const queue = new Queue();

  queue.enqueue(N);

  const visited = Array.from({ length: K + 1 }, () => 0);

  while (queue.size() !== 0) {
    const X = queue.dequeue();

    if (X === K) {
      console.log(visited[X]);
      break;
    }

    const nextNodes = [X - 1, X + 1, X * 2];

    for (let i = 0; i < nextNodes.length; i += 1) {
      const nextNode = nextNodes[i];

      if (nextNode >= 0 && nextNode < 100001) {
        if (!visited[nextNode]) {
          visited[nextNode] = visited[X] + 1;
          queue.enqueue(nextNode);
        }
      }
    }
  }
};

solution(`5 17`);
