class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    if (this.children.length === 0) {
      return array;
    }

    const curNodeArr = this.children;

    for (let i = 0; i < curNodeArr.length; i += 1) {
      const curNode = curNodeArr[i];

      this.name = curNode.name;

      this.children = curNode.children;
      this.depthFirstSearch(array);
    }

    return array;
  }
}

const graph = new Node("A");

graph.addChild("B").addChild("C").addChild("D");
graph.children[0].addChild("E").addChild("F");
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J");
graph.children[2].children[0].addChild("K");

console.log(graph.depthFirstSearch([]));
