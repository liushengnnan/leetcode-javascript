// a Node has a value, a pointer to the previous node (= prev), a pointer to the next node (= next)
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// a Doubly Linked List has a length, a beginning (= head), an end (= tail)
class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        let node = new Node(value);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    pop() {
        if (!this.length) { return null; }
        const nodeToRemove = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            nodeToRemove.prev = null;
        }
        this.length--;
        return nodeToRemove;
    }

    shift() {
        if (!this.length) {
            return null;
        }
        const nodeToRemove = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodeToRemove.next;
            this.head.prev = null;
            nodeToRemove.next = null;
        }
        this.length -= 1;
        return nodeToRemove;
    }

    get(index) {
        if (!this.length || index < 0 || index >= this.length) {
            return null;
        } else {
            let currentNode;
            if (index < this.length / 2) {
                let counter = 0;
                currentNode = this.head;
                while (counter < index) {
                    currentNode = currentNode.next;
                    counter += 1;
                }
            } else {
                let counter = this.length - 1;
                currentNode = this.tail;
                while (counter > index) {
                    currentNode = currentNode.prev;
                    counter -= 1;
                }
            }
            return currentNode;
        }
    }

    remove(index) {
        if (!this.length || index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            const nodeToRemove = this.get(index);
            const prevNodeToRemove = nodeToRemove.prev;
            const nextNodeToRemove = nodeToRemove.next;

            nodeToRemove.prev = null;
            nodeToRemove.next = null;

            prevNodeToRemove.next = nextNodeToRemove;
            nextNodeToRemove.prev = prevNodeToRemove;

            this.length -= 1;
            return nodeToRemove;
        }
    }

    reverse() {
        if (this.length == 0 || this.length == 1) { return; }

        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        for (let i = 0; i < this.length; i++) {
            prevNode = currNode.prev;
            nextNode = currNode.next;

            if (prevNode == null) {
                this.tail = currNode;
                currNode.next = null;
                currNode.prev = nextNode;
            }
            else if (nextNode == null) {
                this.head = currNode;
                currNode.prev = null;
                currNode.next = prevNode;
            }
            else {
                currNode.next = prevNode;
                currNode.prev = nextNode;
            }
            currNode = nextNode;
        }
    }

    reverseEasy() {
        // if (this.length == 0 || this.length == 1) { return; }
        let cur = this.head;
        while (cur) {
            let prev = cur.prev;
            let next = cur.next;
            if (prev == null) { this.tail = cur; }
            else if (next == null) { this.head = cur; }
            cur.next = prev;
            cur.prev = next;
            cur = next;
        }
    }

    traverse() {
        let currNode = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }
}

let newDLL = new DoublyLinkedList();
// console.log(newDLL);
newDLL.push(1);
newDLL.push(2);
newDLL.push(3);
newDLL.push(4);
newDLL.push(5);

// console.log(newDLL);
newDLL.reverseEasy();
newDLL.traverse();

