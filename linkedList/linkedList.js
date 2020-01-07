class Node {
	constructor(value){
		this.value = value
		this.next = null
	}
}

class List {
	constructor(){
		this.head = null
		this.length = 0
	}
	show(){
		let values = ""
		let pointer = this.head
		while(pointer){
			values += `${pointer.value} -> `
			pointer = pointer.next
		}
		values += "null"
		console.log(values)
	}
	insert(value){
		const newNode = new Node(value)
		if(!this.head) {
			this.head = newNode
		} else {
			let pointer = this.head
			while(pointer.next) pointer = pointer.next
			pointer.next = newNode
		}
		this.length++
	}
	pop(){
		if(this.length === 0) return null
		let currentNode = this.head
		this.length--
		if(this.length === 0){
			this.head = null
			return currentNode
		}
		let count = 0
		while(count < this.length - 1){
			currentNode = currentNode.next
			count++
		}
		const lastNode = currentNode.next
		currentNode.next = null
		return lastNode
	}
	get(id){
		id = Math.floor(id)
		if(id < 0 || id > this.length - 1) {
			return null
		}
		let count = 0
		let pointer = this.head
		while (count < id) {
			pointer = pointer.next
			count++
		}
		return pointer
	}
	set(id, value){
		if(!this.get(id)) return false
		this.get(id).value = value
		return true
	}
	deleteNode(id){
		id = Math.floor(id)
		if (id < 0 || id > this.length - 1){
			return this
		}
		this.length--
		if (id === 0) {
			this.head = this.head.next
			return this
		}
		let count = 0
		let pointer = this.head
		while (count < id - 1){
			pointer = pointer.next
			count++
		}
		pointer.next = pointer.next.next
		return this
	}
	reverse(){
		let node = this.head
		let reversedList = null
		while(node){
			let origList = node.next
			node.next = reversedList
			reversedList = node
			node = origList
		}
		this.head = reversedList
		return this
	}
	circular(){
		let fast = this.head
		let slow = this.head

		while(fast.next || slow.next){
			if(slow.next) slow = slow.next; else return false

			if(fast.next) fast = fast.next; else return false
			if(fast.next) fast = fast.next; else return false

			if(fast === slow) return true
		}
	}
}
module.exports = List

