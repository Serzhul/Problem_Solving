function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const removeNthFromEnd = function (head, n) {
  let firstNode = head;
  let secondNode = head;

  for (let i = 0; i < n; i += 1) {
    firstNode = firstNode.next;
  }

  if (!firstNode) return head.next;

  while (firstNode.next) {
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }

  secondNode.next = secondNode.next.next;
  return head;
};

console.log(removeNthFromEnd(head, 2));
