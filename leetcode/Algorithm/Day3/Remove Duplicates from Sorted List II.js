function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(2);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(2);

const deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;

  const dummy = new ListNode(0);

  dummy.next = head;
  let cur = dummy;

  while (cur.next !== null && cur.next.next !== null) {
    if (cur.next.val === cur.next.next.val) {
      const curNextVal = cur.next.val;

      while (cur.next != null && cur.next.val === curNextVal) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};

console.log(deleteDuplicates(head));
