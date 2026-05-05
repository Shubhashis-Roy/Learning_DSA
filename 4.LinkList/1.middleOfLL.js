// Link: https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow; // return the Node
  // return slow.val // return the value
};
