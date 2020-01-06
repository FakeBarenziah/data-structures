const List = require('./linkedList.js')

const myList = new List()
const myListWithOneNode = new List()

myList.insert(5)
myList.insert(4)
myList.insert(3)
myList.insert(2)
myList.insert(1)

myList.show()

myList.reverse()
myList.show()

myList.deleteNode(2)
myList.show()

console.log(myList.get(1).value)
myList.set(1, "B")
console.log(myList.get(1).value)

myList.show()
console.log(myList.pop())
myList.show()

myListWithOneNode.insert(1)

myListWithOneNode.show()

myListWithOneNode.reverse()
myListWithOneNode.show()

myListWithOneNode.deleteNode(1)
myListWithOneNode.show()

myListWithOneNode.deleteNode(0)
myListWithOneNode.show()
