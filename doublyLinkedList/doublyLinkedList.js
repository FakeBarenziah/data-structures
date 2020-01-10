class Node {
	constructor(value){
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}
	notAllNodesShownError(){
		console.error("Not all nodes are shown. Has length been improperly modified?")
	}
	push(value){
		const newNode = new Node(value)
		if(!this.head) {
			this.head = newNode
			this.tail = newNode
		}else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
		return this
	}
	pop(){
		if(!this.tail) return null
		const removeNode = this.tail
		if(this.head === this.tail && this.length === 1){
			this.head = null
			this.tail = null
		}else{
			this.tail = removeNode.prev
			this.tail.next = null
		}
		this.length--
		return removeNode
	}
	show(){
		if(!this.head) return null
		let counter = 0
		let activeNode = this.head
		let listStatement = ""
		while(counter < this.length){
			listStatement += `${activeNode.value} -> `
			activeNode = activeNode.next
			counter++
		}
		if(activeNode && !this.loop()) this.notAllNodesShownError()
		listStatement += this.loop() ? "circular" : "null"
		return listStatement
	}
	indexValid(idx){
		idx = Math.floor(idx)
		if(idx < 0 || idx > this.length - 1) return false
		return idx
	}
	shift(){
		if(!this.head) return null
		const returnVal = this.head
		if(this.head === this.tail && this.length === 1){
			this.head = null
			this.tail = null
		} else {
			this.head = this.head.next
			this.head.prev = null
		}
		this.length--
		return returnVal
	}
	unshift(value){
		const newNode = new Node(value)
		if(!this.head){
			this.head = newNode
			this.tail = newNode
		}else{
			this.head.prev = newNode
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this
	}
	clear(){
		this.head = this.tail = null
		this.length = 0
		return this
	}
	insertAtIndex(idx, value){
		idx = this.indexValid(idx)
		if(idx === false) return this
		const newNode = new Node(value)
		let indexCount = 0
		let insertionPoint = this.head
		while(indexCount < idx){
			insertionPoint = insertionPoint.next
			indexCount++
		}
		if(insertionPoint.prev) insertionPoint.prev.next = newNode
		newNode.next = insertionPoint
		insertionPoint.prev = newNode
		newNode.prev = insertionPoint.prev

		this.length++
		return this
	}
	getAtIndex(idx){
		idx = this.indexValid(idx)
		if(idx === false) return null
		let indexCount = 0
		let accessPoint = this.head
		while(indexCount < idx){
			accessPoint = accessPoint.next
			indexCount++
		}
		return accessPoint
	}
	delete(idx){
		if(this.indexValid(idx) === false) return this
		const prevNode = this.getAtIndex(idx - 1)
		const nextNode = this.getAtIndex(idx + 1)
		if(prevNode) prevNode.next = nextNode
		if(nextNode) nextNode.prev = prevNode
		this.length--
		return this
	}
	makeCircular(){
		this.head.prev = this.tail
		this.tail.next = this.head
		return this
	}
	breakCircular(){
		this.head.prev = null
		this.tail.next = null
		return this
	}
	loop(){
		let fast = this.head
		let slow = this.head
		while(fast.next || slow.next){
			if(slow.next) slow = slow.next; else return false

			if(fast.next) fast = fast.next; else return false
			if(fast.next) fast = fast.next; else return false

			if(fast === slow) return true
		}
	}
	search(value, idx=0){
		let currentNode = this.getAtIndex(idx)
		let counter = 0
		while(counter < this.length){
			if(currentNode.value === value) return currentNode
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
}

module.exports = DoublyLinkedList
