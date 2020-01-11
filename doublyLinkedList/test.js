const DoublyLinkedList = require('./doublyLinkedList.js')

const list = new DoublyLinkedList()

console.log("\n ------Testing------ \n")

const assertionFails = []

console.log("\n Push/Pop: \n")

list.push(10)
console.log("List: ", list.show())

const pushPopDescs = [
	"Nodes head and tail match when one node is in the list: ",
	"pop returns the element in a list with length of 1: ",
	"List has null head and tail after removing its only node: ",
	"List has length 0 after removing its only node: "
]
const pushPopAssertions = [
	list.head === list.tail,
	list.pop().value === 10,
	list.head===null && list.tail===null,
	list.length === 0
]

pushPopAssertions.forEach((each, idx) => {
	if(!each){
		assertionFails.push(pushPopDescs[idx])
		assertionFails.push(pushPopAssertions[idx])
	}
})

console.log(pushPopDescs[0], pushPopAssertions[0])
console.log(pushPopDescs[1], pushPopAssertions[1])
console.log(pushPopDescs[2], pushPopAssertions[2])
console.log(pushPopDescs[3], pushPopAssertions[3])
console.log("List: ", list.show())

const pushVals = [4,8,6,7,9,5,3,1,6,3]

function seedList(dll){
	dll.clear()
	pushVals.forEach(each => dll.push(each))
}

seedList(list)

const pushPopSeededAssertions = [
	list.tail.value === list.pop().value,
	list.tail.value !== 3,
	list.length < 10
]

const pushPopSeededDescs = [
	"pop returns the last element in a list with multiple elements: ",
	"tail element is different than it was before: ",
	"Length is reduced after popping: "
]

pushPopSeededAssertions.forEach((each, idx) => {
	if(!each){
		assertionFails.push(pushPopSeededDescs[idx])
		assertionFails.push(pushPopSeededAssertions[idx])
	}
})

console.log("Longer list: ", list.show())
console.log(pushPopSeededDescs[0], pushPopSeededAssertions[0])
console.log(pushPopSeededDescs[1], pushPopSeededAssertions[1])
console.log(pushPopSeededDescs[2], pushPopSeededAssertions[2])



console.log("\n Shift/Unshift: \n")
console.log(list.show())
const listLengthBeforeShift = list.length

console.log("shift gets the first value: ", list.shift().value === 4)
console.log("shift reduces the length: ", list.length === listLengthBeforeShift - 1)
list.unshift(22)
console.log("unshift adds a value to the head: ", list.head.value === 22)
console.log("unshift increases the length ", list.length === listLengthBeforeShift)
console.log("\n Shift the list with one item: ")
list.clear()
list.push(3)
console.log("shift still works when it empties the list: ", list.shift().value === 3)
console.log("Length is now 0, and head and tail are null: ", list.length === 0, list.head === null, list.tail === null)
console.log("Shifting from an empty list returns null without throwing errors: ", list.shift() === null)

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

console.log("Passing an invalid index does not incorrectly change the length or list: ", list.insertAtIndex(500, 50).length === 11)
console.log("Decimals passed as indices are rounded down: ", list.getAtIndex(6.8) === list.getAtIndex(6))

console.log("\n Delete: \n")

console.log(list.show())
list.delete(3)
console.log("delete decreases the length properly: ", list.length === 10)
console.log("delete removes an element by index position: ", list.getAtIndex(3).value !== 1000)
console.log(list.show())
console.log("Passing an invalid index to delete does not change the length or list: ", list.delete(-2).length === 10)
console.log(list.show())

const origHead = list.head
const origTail = list.tail

list.delete(0)
list.delete(list.length-1)

const newHead = list.head
const newTail = list.tail

console.log("Can delete the first or the last item from the list successfully and reassign head/tail: ", origHead !== newHead, origTail !== newTail)

console.log(list.show())

list.clear()
list.push(18)

console.log(list.show())

list.delete(0)

console.log("Successfully deletes the last item in the list: ", list.search(18)===null, list.head===null, list.tail===null, list.length===0 )

console.log(list.show())

seedList(list)

console.log("\n Error Handling when length is modified improperly \n")
list.length--
console.log(list.show())
list.length++

console.log("\n Circularity: \n")
list.makeCircular()
console.log(list.show())
console.log("Nodes head and tail point to one another: ", list.head.prev === list.tail && list.tail.next === list.head)
list.breakCircular()
console.log("breakCircular returns the list to a linear, non-circular state: ", list.head.prev === null && list.tail.next === null)
console.log(list.show())

console.log("\n Search: \n")

seedList(list)

console.log("Finds the first instance of a node with the given value, starting from the head: ", list.search(1) === list.getAtIndex(7))
console.log("If passed a second argument, the search starts at that index: ", list.search(6, 5) === list.getAtIndex(8))
console.log("Returns null for values not in the list: ", list.search(-1) === null)

console.log("\n Insert Before and After: \n")

console.log(list.show())
const nodeA = list.getAtIndex(5)
const nodeB = nodeA.next
list.insertAfter(8, nodeA)
const nodeC = list.getAtIndex(6)
console.log(list.show())

console.log("insertAfter inserts a node with a value after the passed node: ", nodeA.next.value === 8, nodeB.prev.value === 8)
console.log("insertAfter increases the length correctly: ", list.length === 11)
console.log("Nodes' next pointers are correct: ", nodeA.next === nodeC, nodeC.next === nodeB)
console.log("Nodes' prev pointers are correct: ", nodeB.prev === nodeC, nodeC.prev === nodeA)

const nodeF = list.getAtIndex(8)
const nodeD = nodeF.prev
list.insertBefore(19, nodeF)
const nodeE = list.getAtIndex(8)
console.log(list.show())

console.log("insertBefore inserts a node with a value before the passed node: ", nodeD.next.value === 19, nodeF.prev.value === 19)
console.log("insertBefore increases the length correctly: ", list.length === 12)
console.log("Nodes' next pointers are correct: ", nodeD.next === nodeE, nodeE.next === nodeF)
console.log("Nodes' prev pointers are correct: ", nodeF.prev === nodeE, nodeE.prev === nodeD)

console.log("\n Remove All \n")

console.log(list.show())
list.removeAll(8)
console.log(list.show())

console.log("Removes all instances of the passed value: ", list.search(8) === null)
console.log("Decrements the length: ", list.length === 10)

list.removeAll(4)
list.removeAll(6)
list.removeAll(1)
list.removeAll(3)

console.log(list.show())

console.log("Removes all the instances of multiple removed values", list.search(4) === null && list.search(6) === null && list.search(1) === null && list.search(3) === null)

list.removeAll(7)
list.removeAll(9)
list.removeAll(5)
list.removeAll(19)

console.log(`List length: ${list.length}, head: ${list.head}`)
console.log("Can be used to empty the list: ", list.length === 0 && list.head === null && list.tail === null)

console.log("\n Reversal: \n")

seedList(list)
console.log(list.show())
const firstListElementBeforeReversal = list.getAtIndex(0).value
list.reverse()
console.log(list.show())
const lastListElementAfterReversal = list.getAtIndex(list.length - 1).value

console.log("Reverses a normal list: ", firstListElementBeforeReversal === lastListElementAfterReversal)

const beforeReversingCircularList = list.makeCircular().show()
const afterReversingCircularList = list.reverse().show(true)

console.log("Correctly reverses a circular list: ", beforeReversingCircularList === afterReversingCircularList)

seedList(list)

console.log("\n Map \n")

const originalThirdValue = list.getAtIndex(3).value

const doubledList = list.map(e => e*2)

console.log("Map does not modify the list it is called on: ", originalThirdValue === list.getAtIndex(3).value)
console.log("Map executes a callback function on every list element: ", doubledList.getAtIndex(0).value === list.getAtIndex(0).value * 2, doubledList.getAtIndex(4).value === list.getAtIndex(4).value * 2, doubledList.getAtIndex(list.length-1).value === list.getAtIndex(list.length-1).value * 2)
console.log(doubledList.show())
console.log("Map returns a list of the same length: ", doubledList.length === list.length)

list.makeCircular()
const tripledList = list.map(e => e*3)

console.log("Map works on a circluar list: ", tripledList.getAtIndex(0).value === list.getAtIndex(0).value * 3, tripledList.getAtIndex(6).value === list.getAtIndex(6).value * 3, tripledList.getAtIndex(list.length - 1).value === list.getAtIndex(list.length - 1).value * 3)
console.log("Map returns a circular list if called on one: ", tripledList.tail.next === tripledList.head, tripledList.head.prev === tripledList.tail)
console.log("New circular list has the correct length: ", list.length === tripledList.length)

console.log("\n Filter \n")

list.breakCircular()

const listOfEvens = list.filter(e => e%2 === 0)

console.log("Filter does not modify the list it is called on: ", originalThirdValue === list.getAtIndex(3).value)
console.log("Filter adds only list elements that return true when passed to the callback function: ", listOfEvens.getAtIndex(0).value === 4, listOfEvens.getAtIndex(3).value === 6)
console.log("Filter returns a list of a different length as appropriate: ", listOfEvens.length === 4)
console.log(listOfEvens.show())

list.makeCircular()
const greaterList = list.filter(e => e > 5)

console.log("Filter returns a circular list if called on one: ", greaterList.tail.next === greaterList.head, greaterList.head.prev === greaterList.tail)
console.log("Filtered circluar list is of correct length: ", greaterList.length === 5)
console.log("Filter works on a circular list: ", greaterList.getAtIndex(0).value === 8, greaterList.getAtIndex(4).value === 6)
console.log(greaterList.show())

console.log("\n Reduce \n")

list.breakCircular()

const sumOfValues = list.reduce((e, acc) => e + acc)

console.log("Reduce does not modify the list it is called on: ", originalThirdValue === list.getAtIndex(3).value)
console.log("Reduce applies the callback function to each list element, combining them into one value: ", sumOfValues === 52)

const strCb = (each, acc) => acc += each.toString()

console.log("Reduce works without the optional initial value: ", list.reduce(strCb) === "4867953163")

list.makeCircular()

const multiplier = (each, acc) => each * acc
const bigNum = list.reduce(multiplier)

console.log("Reduce works correctly when the list is circular: ", bigNum === 3265920)
console.log("\n")
console.log("reduceRight combines the list nodes into one value from tail to head: ", list.reduceRight(strCb) === "3613597684")
