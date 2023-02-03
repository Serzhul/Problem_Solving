class LinkedList {
  constrctor(value) {
    this.value = value;
    this.next = null;
  }
}

const l1 = new LinkedList(1);
l1.next = new LinkedList(2);
const l2 = new LinkedList(3);
l2.next = l1.next;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let first = linkedListOne;
  let second = linkedListTwo;

  while (first !== second) {
    first = first === null ? linkedListTwo : first.next;
    second = second === null ? linkedListOne : second.next;
  }

  return first;
}

console.log(mergingLinkedLists(l1, l2));
