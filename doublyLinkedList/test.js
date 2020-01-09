const DoublyLinkedList = require('./doublyLinkedList.js')

const myList = new DoublyLinkedList()

console.assert(myList.length === 0)
myList.push(10)
console.assert(myList.length === 1)

console.assert(myList.head === myList.tail)

console.log(myList.pop(), myList.head, myList.tail)

const list = new DoublyLinkedList()

const pushVals = [4,8,6,7,9,5,3,1,6,3]

pushVals.forEach(each => list.push(each))

console.log(list.tail.value, list.pop(), list.length)
console.log(list.tail.value, list.pop(), list.length)
console.log(list.tail.value)

console.log(list.show())
const listLengthLine24 = list.length

console.assert(list.shift() === 4)
console.assert(list.length === listLengthLine24 - 1)
list.unshift(22)
console.assert(list.head.value === 22)
console.assert(list.length === listLengthLine24)
