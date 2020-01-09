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
		if(this.length === 0) return null
		let counter = 0
		let activeNode = this.head
		let listStatement = ""
		while(counter < this.length){
			listStatement += `${activeNode.value} -> `
			activeNode = activeNode.next
			counter++
		}
		return listStatement += "null"
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
		let indexCount = 0
		let accessPoint = this.head
		while(indexCount < idx){
			accessPoint = accessPoint.next
			indexCount++
		}
		return accessPoint
	}
}

module.exports = DoublyLinkedList
