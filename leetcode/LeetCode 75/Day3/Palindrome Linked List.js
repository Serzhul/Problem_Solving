/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(2);
head.next.next.next.next.next = new ListNode(1);

const isPalindrome = function (head) {
  const valArr = [];

  let cur = head;

  while (cur) {
    valArr.push(cur.val);
    cur = cur.next;
  }

  const len = valArr.length;

  for (let i = 0; i <= Math.floor(len / 2); i += 1) {
    if (valArr[i] !== valArr[len - i - 1]) return false;
  }

  return true;
};

console.log(isPalindrome(head));
