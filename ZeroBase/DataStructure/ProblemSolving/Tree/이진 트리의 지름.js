/* eslint-disable no-prototype-builtins */
/* eslint-disable max-classes-per-file */
// 트리의 지름: 트리의 특정 두 노드를 선택하여 양쪽으로 당겼을 때, 가중치의 합이 최대가 되는 길이
// 모든 간선의 가중치가 1일 때, 이진 트리의 지름을 구하라.

class Node {
  constructor(data, left = null, right = null, parent = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(parent, left, right) {
    if (left) {
      parent.left = left;
      left.parent = parent;
    }

    if (right) {
      parent.right = right;
      right.parent = parent;
    }
  }

  getLongestDistanceNodeFromRoot(start) {
    // BFS
    const queue = [];

    queue.push([start, 0]);

    let maxDistance = 0;
    let maxDistanceNode = null;

    while (queue.length) {
      const [cur, curDistance] = queue.shift();

      let isLeafNode = true;

      if (cur.left) {
        queue.push([cur.left, curDistance + 1]);
        isLeafNode = false;
      }

      if (cur.right) {
        queue.push([cur.right, curDistance + 1]);
        isLeafNode = false;
      }

      // 리프노드 => 가장 먼 노드로 왔음
      if (isLeafNode) {
        if (curDistance > maxDistance) {
          maxDistance = curDistance;
          maxDistanceNode = cur;
        }
      }
    }

    return [maxDistanceNode, maxDistance];
  }

  getLongestDistanceNode(start) {
    let prev = start;
    let cur = start;
    let distance1 = 0; // 가장 거리가 먼 node에서 root까지 올라오는 거리
    while (cur.parent) {
      prev = cur;
      cur = cur.parent;
      distance1 += 1;
    }

    if (cur.left === prev) {
      cur.left = null;
    } else {
      cur.right = null;
    }

    const [node, distance2] = this.getLongestDistanceNodeFromRoot(cur);
    // root에서 가장 거리가 먼 거리
    // console.log(`distance1: ${distance1} distance2: ${distance2}`);
    // console.log(node);

    return distance1 + distance2;
  }
}

const arr = [
  ["1", "2", "3"],
  ["2", "4", "."],
  ["3", "5", "6"],
];

const nodeMap = {};
const tree = new Tree();

arr.forEach((el) => {
  const [root, left, right] = el;

  if (root !== "." && !nodeMap.hasOwnProperty(root)) {
    const node = new Node(root, null, null, null);

    nodeMap[root] = node;
  }

  if (left !== "." && !nodeMap.hasOwnProperty(left)) {
    const node = new Node(left, null, null, null);

    nodeMap[left] = node;
  }

  if (right !== "." && !nodeMap.hasOwnProperty(right)) {
    const node = new Node(right, null, null, null);

    nodeMap[right] = node;
  }

  tree.add(nodeMap[root], nodeMap[left], nodeMap[right]);
});
// 1. root에서 가장 먼 노드들을 찾는다.
const [node1, dist1] = tree.getLongestDistanceNodeFromRoot(nodeMap["1"]);
const distance = tree.getLongestDistanceNode(node1);

// 2. 해당 노드들에서 가장 먼 노드의 길이 (최대값 갱신)
console.log(distance);
