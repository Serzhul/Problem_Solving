/* eslint-disable prefer-destructuring */
class Graph {
  constructor() {
    this.size = 5;

    this.list = Array.from({ length: this.size }, () => []);
  }

  get(from, to) {
    console.log(`[GET] : from ${from} to = ${to}`);

    let vertex = this.list[from].filter((el) => el.to === to);
    vertex = vertex[0];

    if (vertex) {
      console.log(vertex.value);
    } else console.log("Not found");

    return vertex === undefined ? 0 : vertex.value;
  }

  set(from, to, value) {
    console.log(`[SET] : from ${from} to = ${to} value = ${value}`);

    if (this.get(from, to) !== 0) {
      console.log("Already exists!");
    } else {
      this.list[from].push({
        to,
        value,
      });
    }
  }

  remove(from, to) {
    console.log(`[REMOVE] : from ${from} to = ${to}`);

    if (this.get(from, to) !== 0) {
      this.list[from] = this.list[from].filter((el) => el.to !== to);
    } else {
      console.log("Not found!");
    }
  }

  print() {
    console.log(`[PRINT]`);
    console.log(this.list);
  }

  clear() {
    console.log(`[CLEAR]`);
    this.list = Array.from({ length: this.size }, () => []);
  }
}

const graph = new Graph();

graph.set(0, 1, 1);
graph.set(0, 3, 1);
graph.set(0, 4, 1);
graph.set(3, 0, 1);
graph.set(3, 1, 1);
graph.set(3, 1, 2);

graph.print();
graph.get(0, 1);
graph.get(0, 2);

graph.remove(0, 2);
graph.print();

graph.remove(0, 1);
graph.print();

graph.clear();
graph.print();
