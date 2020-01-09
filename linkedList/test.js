const List = require('./linkedList.js')

const myList = new List()
const myListWithOneNode = new List()

myList.insert(5)
myList.insert(4)
myList.insert(3)
myList.insert(2)
myList.insert(1)

myList.show()
console.log(`Length is correct: ${myList.length === 5}`)
myList.reverse()
myList.show()
console.log(`Length is correct: ${myList.length === 5}`)

myList.deleteNode(2)
myList.show()
console.log(`Length is correct: ${myList.length === 4}`)

console.log(myList.get(1).value)
myList.set(1, "B")
console.log(myList.get(1).value)

myList.show()
console.log(myList.pop())
myList.show()
console.log(`Length is correct: ${myList.length === 3}`)

myListWithOneNode.insert(1)

myListWithOneNode.show()

myListWithOneNode.reverse()
myListWithOneNode.show()
console.log(`One-node-list length is correct: ${myListWithOneNode.length === 1}`)

myListWithOneNode.deleteNode(1)
myListWithOneNode.show()
console.log(`One-node-list length is correct: ${myListWithOneNode.length === 1}`)

myListWithOneNode.deleteNode(0)
myListWithOneNode.show()
console.log(`One-node-list length is correct: ${myListWithOneNode.length === 0}`)

const myCircularList = new List()
myCircularList.insert(10)
myCircularList.insert(9)
myCircularList.insert(8)
myCircularList.insert(7)
myCircularList.insert(6)

myCircularList.get(myCircularList.length-1).next = myCircularList.get(1)

console.log(`myList circular?  ${myList.circular()}`)
console.log(`myCircularList circular? ${myCircularList.circular()}`)
console.log(`Circular length is correct: ${myCircularList.length === 5}`)
