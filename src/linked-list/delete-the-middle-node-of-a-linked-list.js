/**
 * 2095. delete-the-middle-node-of-a-linked-list
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75
 */

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
var deleteMiddle = function (head) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  if (length === 1) {
    return null;
  }

  const removeIndex = parseInt(length / 2);
  current = head;
  let currentIndex = 0;

  while (current) {
    if (currentIndex === removeIndex - 1) {
      current.next = current.next.next;
      break;
    }

    currentIndex++;
    current = current.next;
  }

  return head;
};

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
var deleteMiddle = function (head) {
  const dummy = new ListNode(null, head);
  let slow = dummy;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};
