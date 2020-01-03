const List = require('./linkedList.js')

const myList = new List()

myList.insert(5)
myList.insert(4)
myList.insert(3)
myList.insert(2)
myList.insert(1)

myList.show()

console.log(myList.set(0, 0))

myList.show()
