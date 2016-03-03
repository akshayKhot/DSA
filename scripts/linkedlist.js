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
}

function LinkedList() {
    this.head = new Node("header");
    this.current = this.head;

    this.find = find;
    this.add = add;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
    this.advance = advance;
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
    prevNode.next = newNode;
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
    output += "null\n";
    if(this.current !== null) {
        output += "current node: " + this.current.data;
    }
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
    var prevNode = this.findPrevious(data);
    if(prevNode.next !== null) {
        var toRemove = prevNode.next;
        prevNode.next = toRemove.next;
    }
}

/**
 * print utility
 * @param data
 */
function say(data) {
    console.log(data);
}

/**
 * advance a certain number of nodes
 * @param number of nodes to advance
 */
function advance(number) {
    say("before advancing, current: " + this.current.data);
    while(number > 0 && this.current !== null) {
        this.current = this.current.next;
        number -= 1;
    }
    if(this.current === null) {
        say("reached end of list");
    }
}

var myLink = new LinkedList();
myLink.display();
myLink.add(1, "header");
myLink.add(2,1);
myLink.add(3,2);
myLink.display();
myLink.remove(1);
myLink.display();
myLink.add(10,3);
myLink.add(23,10);
myLink.add(5,23);
myLink.display();
myLink.advance(6);
myLink.display();