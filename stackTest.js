const StackList = require("./stackAndQueue").StackList;

const testStack = new StackList();

console.log(testStack.peek(), testStack.length);
console.log(testStack.read());
testStack.push("Ava");
console.log(testStack.peek(), testStack.length);
console.log(testStack.read());
console.log(testStack.pop());
console.log(testStack.peek(), testStack.length);
console.log(testStack.read());
testStack.push("Moola");
testStack.push("Mom");
console.log(testStack.peek(), testStack.length);
console.log(testStack.read());
