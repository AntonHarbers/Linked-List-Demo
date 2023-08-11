class Node {
    constructor() {
        this.value = null;
        this.pointer = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }

    size(){
        return this.size;
    }

    append(value) {
        let node = new Node();
        node.value = value;

        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.pointer = node;
            this.tail = node;
        }

        this.size++;
    }

    prepend(value) {
        let node = new Node();
        node.value = value;

        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.pointer = this.head;
            this.head = node;
        }

        this.size++;
    }

    isEmpty() {
        return this.size === 0;
    }

    pop(){
        if (this.size === 0) {
            return null;
        } else if (this.size === 1) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return node.value;
        } else {
            let node = this.tail;
            let currentNode = this.head;

            while (currentNode.pointer !== this.tail) {
                currentNode = currentNode.pointer;
            }

            currentNode.pointer = null;
            this.tail = currentNode;
            this.size--;
            return node.value;
        }
    }

    at(index){
        if (index >= this.size) {
            return null;
        } else {
            let node = this.head;
            let i = 0;

            while (i < index) {
                node = node.pointer;
                i++;
            }

            return node.value;
        }
    }

    contains(value){
        let node = this.head;

        while (node) {
            if (node.value === value) {
                return true;
            }

            node = node.pointer;
        }

        return false;

    }

    find(value){
        let node = this.head;

        while (node) {
            if (node.value === value) {
                return node;
            }

            node = node.pointer;
        }

        return null;
    }

    toString(){
        let node = this.head;
        let str = '';

        while (node) {
            str += node.value + ' ';
            node = node.pointer;
        }

        return str;
    }

    insertAt(value, index){

        if (index >= this.size) {
            return null;
        } else {
            let node = new Node();
            node.value = value;

            if (index === 0) {
                node.pointer = this.head;
                this.head = node;
            } else {
                let currentNode = this.head;
                let i = 0;

                while (i < index - 1) {
                    currentNode = currentNode.pointer;
                    i++;
                }

                node.pointer = currentNode.pointer;
                currentNode.pointer = node;
            }

            this.size++;
        }
    }

    removeAt(index){
        if (index >= this.size) {
            return null;
        } else {
            let node = this.head;

            if (index === 0) {
                this.head = node.pointer;
            } else {
                let currentNode = this.head;
                let i = 0;
                
                while (i < index - 1) {
                    
                    currentNode = currentNode.pointer;
                    i++;
                }

                node = currentNode.pointer;
                currentNode.pointer = node.pointer;
            }

            this.size--;
            return node.value;
        }
    }

    printList(){
        let node = this.head;
        let str = '';

        while (node) {
            str += node.value + ' ';
            node = node.pointer;
        }

        console.log(str);
    }
}
