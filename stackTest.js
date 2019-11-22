const StackList = require("./stackAndQueue").StackList;

const testStack = new StackList();

console.log(testStack.peek(), testStack.length);
testStack.push("Ava");
console.log(testStack.peek(), testStack.length);
console.log(testStack.pop());
console.log(testStack.peek(), testStack.length);
testStack.push("Moola");
testStack.push("Mom");
console.log(testStack.peek(), testStack.length);
