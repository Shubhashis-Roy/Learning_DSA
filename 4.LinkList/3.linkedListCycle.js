// Link: https://leetcode.com/problems/linked-list-cycle/description/
// Q.Given head, the head of a linked list, determine if the linked list has a cycle in it.

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
