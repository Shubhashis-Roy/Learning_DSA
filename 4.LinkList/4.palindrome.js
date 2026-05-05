var isPalindrome = function (head) {
  // Find middle
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the 2nd half of linked list
  let prev = null;
  let curr = slow;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Check value is matching or not
  let left = head;
  let right = prev;

  while (right != null) {
    if (right.val != left.val) {
      return false;
    }

    right = right.next;
    left = left.next;
  }

  return true;
};
