// Leet Code 기준 풀이

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = (head) => {
    const left = 0;
    let right = 0;

    let list = head;

    while (list) {
        right += 1;
        list = list.next;
    }

    const mid = Math.floor((left + right) / 2);

    list = head;

    let count = 0;

    while (count !== mid) {
        count += 1;
        list = list.next;
    }

    return list;
};
