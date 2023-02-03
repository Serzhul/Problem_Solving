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
}

function getNodesInArray(linkedList) {
  const nodes = [];
  let current = linkedList;
  while (current !== null) {
    nodes.push(current.value);
    current = current.next;
  }
  return nodes;
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let cur1 = linkedListOne;
  let cur2 = linkedListTwo;
  let carry = 0;

  const newLinkedList = new LinkedList(0);
  let curNode = newLinkedList;

  while (cur1 !== null || cur2 !== null || carry !== 0) {
    const valOne = cur1 !== null ? cur1.value : 0;
    const valTwo = cur2 !== null ? cur2.value : 0;

    const sum = valOne + valTwo + carry;

    const newVal = sum % 10;
    const newNode = new LinkedList(newVal);
    curNode.next = newNode;
    curNode = newNode;

    carry = Math.floor(sum / 10);
    cur1 = cur1 !== null ? cur1.next : null;
    cur2 = cur2 !== null ? cur2.next : null;
  }

  return newLinkedList.next;
}

const linkedListOne = new LinkedList(2).addMany([4, 7, 1]);
const linkedListAnother = new LinkedList(9).addMany([4, 5]);

console.log(sumOfLinkedLists(linkedListOne, linkedListAnother));
