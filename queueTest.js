const QueueList = require("./stackAndQueue.js").QueueList;

const testQueue = new QueueList();

testQueue.enqueue(10);
console.log(testQueue.peek(), testQueue.length);
console.log(testQueue.read());
testQueue.dequeue();
console.log(testQueue.peek(), testQueue.length);
console.log(testQueue.read());
testQueue.enqueue(11);
testQueue.enqueue(15);
console.log(testQueue.peek(), testQueue.length);
console.log(testQueue.read());
