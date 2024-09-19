/**
 * 328. odd-even-linked-list
 * https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Find center node and then move
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  while (odd.next && odd.next.next) {
    let tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  odd.next = even;
  return head;
}
