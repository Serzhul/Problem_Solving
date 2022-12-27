/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const sortList = (head) => {
  const merge = (nodeA, nodeB) => {
    const dummyNode = new ListNode(-1);
    let tmp = dummyNode;

    while (nodeA && nodeB) {
      tmp.next = nodeA.val < nodeB.val ? nodeA : nodeB;
      tmp = tmp.next;
      if (nodeA.val < nodeB.val) nodeA = nodeA.next;
      else nodeB = nodeB.next;
    }

    if (nodeA) tmp.next = nodeA;
    if (nodeB) tmp.next = nodeB;

    return dummyNode.next;
  };

  if (head === null || head.next === null) return head;
  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  const middle = slow.next;
  slow.next = null;

  return merge(sortList(head), sortList(middle));
};

console.log(sortList(head));
