const DoublyLinkedList = require('./doublyLinkedList.js')

const list = new DoublyLinkedList()

list.push(10)

console.log("\n ------Testing!------ \n")

console.log("\n Push/Pop: \n")

console.log("List: ", list.show())
console.log("Nodes head and tail match when one node is in the list: ", list.head === list.tail)
console.log("pop returns the element in a list with length of 1: ", list.pop().value === 10)
console.log("List has null head and tail after removing its only node: ", list.head===null && list.tail===null)
console.log("List has length 0 after removing its only node: ", list.length === 0)
console.log("List: ", list.show())

const pushVals = [4,8,6,7,9,5,3,1,6,3]

function seedList(dll){
	dll.clear()
	pushVals.forEach(each => dll.push(each))
}

seedList(list)
console.log("Longer list: ", list.show())
console.log("pop returns the last element in a list with multiple elements: ", list.tail.value === list.pop().value)
console.log("tail element is different than it was before: ", list.tail.value !== 3)
console.log("Length is reduced after popping: ", list.length < 10)

console.log("\n Shift/Unshift: \n")
console.log(list.show())
const listLengthBeforeShift = list.length

console.log("shift gets the first value: ", list.shift().value === 4)
console.log("shift reduces the length: ", list.length === listLengthBeforeShift - 1)
list.unshift(22)
console.log("unshift adds a value to the head: ", list.head.value === 22)
console.log("unshift increases the length ", list.length === listLengthBeforeShift)

console.log("\n Clear: \n")
list.clear()

console.log("Clear method clears the head and tail nodes, and sets the length to 0: ", list.head === null, list.tail === null, list.length === 0)

seedList(list)
console.assert(list.length === 10)

console.log("\n Insert and Get by index: \n")

console.log(list.show())
console.log("insertAtIndex increases the length: ", list.insertAtIndex(3, 1000).length === 11)
console.log("getAtIndex gets the correct node: ", list.getAtIndex(3).value === 1000)
console.log(list.show())

console.log("\n Delete: \n")

console.log(list.show())
list.delete(3)
console.log("delete decreases the length properly: ", list.length === 10)
console.log("delete removes an element by index position: ", list.getAtIndex(3).value !== 1000)
console.log(list.show())

console.log("\n Circularity: \n")
list.makeCircular()
console.log(list.show())
console.log("Nodes head and tail point to one another: ", list.head.prev === list.tail && list.tail.next === list.head)
list.breakCircular()
console.log("breakCircular returns the list to a linear, non-circular state: ", list.head.prev === null && list.tail.next === null)
console.log(list.show())
