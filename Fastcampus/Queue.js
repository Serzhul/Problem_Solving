class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex += 1;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex += 1;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function bfs(graph, start, visited) {
  const queue = [];
  queue.push(start);

  visited[start] = true;

  while (queue.length) {
    const cur = queue.shift();
    console.log(cur);

    for (let i = 0; i < graph.length; i += 1) {
      if (!visited[i]) {
        queue.push(cur);
        visited[i] = true;
      }
    }
  }
}
