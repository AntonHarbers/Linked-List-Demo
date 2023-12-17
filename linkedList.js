class Node {
  constructor(value = null) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    let node = new Node(value);

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
    let node = new Node(value);

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

  pop() {
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

  at(index) {
    if (index >= this.size) {
      return null;
    } else {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.pointer;
      }
      return node.value;
    }
  }

  contains(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }

      node = node.pointer;
    }

    return false;
  }

  find(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return node;
      }

      node = node.pointer;
    }

    return null;
  }

  toString() {
    let node = this.head;
    let str = '';

    while (node) {
      str += node.value + ' ';
      node = node.pointer;
    }

    return str.trim();
  }

  insertAt(value, index) {
    if (index > this.size) {
      return null;
    }

    let node = new Node(value);

    if (index === 0) {
      node.pointer = this.head;
      this.head = node;
      if (this.size === 0) {
        this.tail = node;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.pointer;
      }
      node.pointer = currentNode.pointer;
      currentNode.pointer = node;
      if (index === this.size) {
        this.tail = node;
      }
    }

    this.size++;
  }

  removeAt(index) {
    if (index >= this.size) {
      return null;
    }

    if (index === 0) {
      let node = this.head;
      this.head = node.pointer;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return node.value;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.pointer;
      }
      let node = currentNode.pointer;
      currentNode.pointer = node.pointer;
      if (index === this.size - 1) {
        this.tail = currentNode;
      }
      this.size--;
      return node.value;
    }
  }

  printList() {
    let node = this.head;
    let str = '';

    while (node) {
      str += node.value + ' ';
      node = node.pointer;
    }
    console.log(str.trim());
  }
}

// Instantiate the LinkedList
let myList = new LinkedList();

// Append elements to the list
myList.append(10);
myList.append(20);
myList.append(30);

// Print the list to see the appended elements
console.log('After appending 10, 20, 30:');
myList.printList(); // Expected output: 10 20 30

// Prepend an element
myList.prepend(5);

// Print the list to see the list after prepending
console.log('After prepending 5:');
myList.printList(); // Expected output: 5 10 20 30

// Check the size of the list
console.log('Size of the list:', myList.getSize()); // Expected output: 4

// Check if the list contains a value
console.log('Does the list contain 20?', myList.contains(20)); // Expected output: true
console.log('Does the list contain 99?', myList.contains(99)); // Expected output: false

// Remove the last element and print the list
console.log('Value popped:', myList.pop()); // Expected output: 30
console.log('After popping:');
myList.printList(); // Expected output: 5 10 20

// Insert at a specific index and print the list
myList.insertAt(15, 1);
console.log('After inserting 15 at index 1:');
myList.printList(); // Expected output: 5 15 10 20

// Remove at a specific index and print the list
console.log('Value removed at index 2:', myList.removeAt(2)); // Expected output: 10
console.log('After removing value at index 2:');
myList.printList(); // Expected output: 5 15 20

// Get value at a specific index
console.log('Value at index 1:', myList.at(1)); // Expected output: 15

// Print the final state of the list
console.log('Final state of the list:');
myList.printList(); // Expected output: 5 15 20
