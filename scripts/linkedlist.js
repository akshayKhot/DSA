/**
 * Created by akshaykhot on 2016-03-01.
 */

/**
 * "Linked Lists"
 * When to use? arrays are objects, hence slower. When speed matters, use linked lists.
 * When not to use? When random access is neded to the element of the list
 */

function Node(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
}

function LinkedList() {
    this.head = new Node("header");

    this.find = find;
    this.add = add;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.findLast = findLast;
    this.display = display;
    this.displayReverse = displayReverse;
}

/**
 * return the node which have the data
 * @param data
 * @return Node, if we find it; null otherwise
 */
function find(data) {
    //start with the head, and go forward till we hit the null
    var current = this.head;
    while(current.data !== data) {
        current = current.next;
    }
    return current;
}

/**
 * Insert a new node with the given data, after the node with the 2nd data
 * @param data
 */
function add(data, previous) {
    var newNode = new Node(data);
    var prevNode = this.find(previous);
    newNode.next = prevNode.next;
    newNode.previous = prevNode;
    prevNode.next = newNode;
}

/**
 * find the last element in the list
 */
function findLast() {
    var current = this.head;
    while(current.next !== null) {
        current = current.next;
    }
    return current;
}

/**
 * Display this linked list
 */
function display() {
    var output = "";
    var current = this.head;
    output += current.data + "->";
    while(current.next !== null) {
        current = current.next;
        output += current.data + "->";
    }
    output += "null";
    say(output);
}

/**
 * Display this linked list in reverse order
 */
function displayReverse() {
    var output = "";
    var current = this.findLast();
    output += current.data + "->";
    while(current.previous.data !== "header") {
        current = current.previous;
        output += current.data + "->";
    }
    output += "header";
    say(output);
}


/**
 * find the previous node of the node with the given data
 * return {node} previous to the given data
 */
function findPrevious(data) {
    var currNode = this.head;
    while(currNode.next !== null && currNode.next.data !== data) {
        currNode = currNode.next;
    }
    return currNode;
}

/**
 * Remove the given element from the linked list
 * @param data to remove
 */
function remove(data) {
    var toRemove = this.find(data);
    if(toRemove.next !== null) {
        var prevNode = toRemove.previous;
        toRemove.next.previous = prevNode;
        prevNode.next = toRemove.next;
        toRemove.next = null;
        toRemove.prev = null;
    }
}

/**
 * print utility
 * @param data
 */
function say(data) {
    console.log(data);
}

var myLink = new LinkedList();
myLink.display();
myLink.add(1, "header");
myLink.add(2,1);
myLink.add(3,2);
myLink.display();
myLink.displayReverse();
