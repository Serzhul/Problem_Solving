class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

function removeKthNodeFromEnd(head, k) {
  let fast = head;
  let slow = head;

  let count = 1;

  while (count <= k) {
    fast = fast.next;
    count += 1;
  }

  if (!fast) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
}

const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(removeKthNodeFromEnd(test, 4));
