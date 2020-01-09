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
		if(!this.head) return null
		let removeNode = null
		if(this.head === this.tail && this.length === 1){
			removeNode = this.head
			this.head = null
			this.tail = null
		}else{
			removeNode = this.tail
			this.tail = removeNode.prev
			this.tail.next = null
		}
		this.length--
		return removeNode.value
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
		const returnVal = this.head.value
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
}

module.exports = DoublyLinkedList
