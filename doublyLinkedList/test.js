const DoublyLinkedList = require('./doublyLinkedList.js')

const myList = new DoublyLinkedList()

myList.push(10)

console.log("Nodes head and tail match when one node is in the list: ", myList.head === myList.tail)

console.log("pop returns the element in a list with length of 1: ", myList.pop().value === 10)

console.log("List has null head and tail after removing its only node: ", myList.head===null && myList.tail===null)

const list = new DoublyLinkedList()

const pushVals = [4,8,6,7,9,5,3,1,6,3]

pushVals.forEach(each => list.push(each))

console.log("pop returns the last element in a list with multiple elements: ", list.tail.value === list.pop().value)
console.log("tail element is different than it was before: ", list.tail.value !== 3)
console.log("Length is reduced after popping: ", list.length < 10)

console.log(list.show())
const listLengthLine24 = list.length

console.log("shift gets the first value: ", list.shift().value === 4)
console.log("shift reduces the length: ", list.length === listLengthLine24 - 1)
list.unshift(22)
console.log("unshift adds a value to the head: ", list.head.value === 22)
console.log("unshift increases the length ", list.length === listLengthLine24)

list.clear()

console.log("Clear method clears the list: ", list.head === null && list.tail === null && list.length === 0)

pushVals.forEach(each => list.push(each))
console.assert(list.length === 10)

console.log(list.show())
console.log("insertAtIndex increases the length: ", list.insertAtIndex(3, 1000).length === 11)
console.log("getAtIndex gets the correct node: ", list.getAtIndex(3).value === 1000)

console.log(list.show())
list.delete(3)
console.log("delete decreases the length properly: ", list.length === 10)
console.log("delete removes an element by index position: ", list.getAtIndex(3).value !== 1000)
console.log(list.show())
