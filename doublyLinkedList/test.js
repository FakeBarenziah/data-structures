const DoublyLinkedList = require('./doublyLinkedList.js')

const myList = new DoublyLinkedList()

console.assert(myList.length === 0)
myList.push(10)
console.assert(myList.length === 1)

console.assert(myList.head === myList.tail)

console.log(myList.pop().value, myList.head, myList.tail)

const list = new DoublyLinkedList()

const pushVals = [4,8,6,7,9,5,3,1,6,3]

pushVals.forEach(each => list.push(each))

console.log(list.tail.value, list.pop().value, list.length)
console.log(list.tail.value, list.pop().value, list.length)
console.log(list.tail.value)

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
console.log(list.show())

console.log("getAtIndex gets the correct node: ", list.getAtIndex(3).value === 1000)
