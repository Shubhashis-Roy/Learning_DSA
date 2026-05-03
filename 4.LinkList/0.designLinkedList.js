// Link: https://leetcode.com/problems/design-linked-list/

function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  // Corner Case
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
    return;
  }

  let curr = this.head;
  while (curr.next != null) {
    curr = curr.next;
  }

  curr.next = newNode;
  this.size++;
};

// MyLinkedList.prototype.addAtTail = function (val) {
//   const newNode = new Node(val);
//   if (!this.head) this.head = newNode;
//   else {
//     let curr = this.head;
//     while (curr.next) curr = curr.next;
//     curr.next = newNode;
//   }
//   this.size++;
// };

MyLinkedList.prototype.addAtIndex = function (index, val) {
  // Corner Case
  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  let newNode = new Node(val);
  let curr = this.head;
  for (i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;

    return;
  }

  let curr = this.head;

  for (i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;
  this.size--;
};
