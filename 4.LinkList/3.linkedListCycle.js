// Link: https://leetcode.com/problems/linked-list-cycle/description/
// Q.Given head, the head of a linked list, determine if the linked list has a cycle in it.

// Time complexity: O(n)
// Space comp: O(n)
var hasCycle = function (head) {
  let seenNodes = new set();
  let curr = head;

  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    }

    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
};

// Floyd's Algo
// Time complexity: O(n)
// Space comp: O(1)
var hasCycle = function (head) {
  if (head === null) return false;

  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
