# Linked List - The Odin Project

A linked list implementation using javascript for the odin project.

To run this code just clone the repo and run the following code in your terminal:

CMD:

```
    node linkedList
```

Important: You need to have node JS installed on your system.

## Folder Structure

```
    /.git           -> This git repository
    linkedList.js   -> Implementation of a linked list class
    README.md       -> This readme file
```

## Key Concepts

### Classes

Classes are a blueprint for creating objects in JavaScript, encapsulating data and functions that operate on that data. Introduced in ES6, they provide a more intuitive and structured way to create object-oriented code.

Example:
Here's how a class is defined and used in your LinkedList implementation:

JS:

```
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

        // Methods like append, prepend, etc.
    }
```

Notes:
Node and LinkedList are classes. Node represents a single element in the list, while LinkedList manages the overall list structure.
The constructor method is used for initializing new objects.

### Linked List Data Structure

A linked list is a linear data structure where each element (node) contains a reference (pointer) to the next node in the sequence. This structure allows for efficient insertion and removal of elements from any position in the list.

Example:
The append method adds a new node to the end of the list:

JS:

```
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
```

Notes:
This method handles both an empty list and a non-empty list, updating head, tail, and size appropriately.
Node instances are used to store data and the reference to the next node.

## Final Notes

The implementation of a linked list using classes in JavaScript demonstrates the object-oriented approach and its efficiency in managing dynamic data. The linked list's ability to insert and remove elements without reorganizing the entire data structure makes it a versatile and useful choice in various applications.
