class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return null;
    const nodeVal = this.head.data;
    this.head = this.head.next;
    this.length--;
    return nodeVal;
  }
  peek() {
    return this.head ? this.head.data : null;
  }
  read() {
    if (!this.length) return "This stack is empty.";
    let retStr = `This stack contains ${
      this.length
    } items in order of removal:`;
    let pointer = this.head;
    while (pointer) {
      retStr = retStr.concat(` \n${pointer.data}`);
      pointer = pointer.next;
    }
    return retStr;
  }
}

class QueueList {
  constructor() {
    this.tail = null;
    this.length = 0;
  }
  enqueue(data) {
    const end = new ListNode(data);
    if (this.tail) {
      end.next = this.tail.next;
      this.tail.next = end;
    } else end.next = end;
    this.tail = end;
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.tail) return null;
    const value = this.tail.next.data;
    this.length--;
    if (!this.length) this.tail = null;
    else this.tail.next = this.tail.next.next;
    return value;
  }
  peek() {
    return this.tail ? this.tail.next.data : null;
  }
  read() {
    if (!this.length) return "This queue is empty.";
    let retStr = `This queue contains ${
      this.length
    } items in order of removal:`;
    let pointer = this.tail.next;
    let count = this.length;
    while (count) {
      retStr = retStr.concat(`\n${pointer.data}`);
      pointer = pointer.next;
      count--;
    }
    return retStr;
  }
}

module.exports = {
  StackList,
  QueueList
};
