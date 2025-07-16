const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  pop() {
    if (!this.head) return -1;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return value;
  }

  front() {
    return this.head ? this.head.value : -1;
  }

  back() {
    return this.tail ? this.tail.value : -1;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }

  getSize() {
    return this.size;
  }
}

const T = Number(input.shift());
const queue = new Queue();
const res = [];

for (let i = 0; i < T; i++) {
  const line = input[i];
  if (line.startsWith("push")) {
    const [, num] = line.split(" ");
    queue.push(Number(num));
  } else if (line === "front") {
    res.push(queue.front());
  } else if (line === "back") {
    res.push(queue.back());
  } else if (line === "size") {
    res.push(queue.getSize());
  } else if (line === "empty") {
    res.push(queue.empty());
  } else if (line === "pop") {
    res.push(queue.pop());
  }
}

console.log(res.join("\n"));
