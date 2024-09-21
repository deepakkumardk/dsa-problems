/**
 * 2130. maximum-twin-sum-of-a-linked-list
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75
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
 * @return {number}
 */
var pairSum = function (head) {
  let secondHalfHead = null;
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  const half = Math.floor(length / 2) - 1;
  const nextHalfStart = Math.ceil(length / 2);
  let nextHalfHead = null;
  current = head;
  let prev = null;
  let index = 0;

  while (current) {
    index++;

    prev = current;
    current = current.next;
    if (index == nextHalfStart) {
      nextHalfHead = reverseList(current);
      prev.next = null;
      break;
    }
  }

  current = head;
  let secondHalfCurrent = nextHalfHead;
  console.log(head);
  console.log(secondHalfCurrent);

  let max = 0;
  while (secondHalfCurrent) {
    max = Math.max(max, current.val + secondHalfCurrent.val);
    current = current.next;
    secondHalfCurrent = secondHalfCurrent.next;
  }
  return max;
};

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
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
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head;
  let prev = null;
  // find the midpoint of the listNode
  while (fast && fast.next) {
    fast = fast.next.next;
    // reverse first half of listNode
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  let max = 0;
  while (slow) {
    let sum = slow.val + prev.val;
    if (sum > max) {
      max = sum;
    }
    slow = slow.next;
    prev = prev.next;
  }
  return max;
};
