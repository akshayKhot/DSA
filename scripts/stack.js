/**
 * Created by akshaykhot on 2016-02-27.
 */

/**
 * Stack: Last-In First-Out
 */
$(document).ready(function() {
    var stack = new Stack();
    stack.push(1);
    stack.push(15);
    stack.push(12);
    stack.push(2);
    console.log(stack.pop());
    console.log(stack.peek());
    stack.display();
    stack.clear();
    stack.display();

});

/**
 * construct a new Stack
 * @constructor
 */
function Stack() {
    //top represents the next empty position in the array
    this.top = 0;
    this.dataStore = [];

    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.isEmpty = isEmpty;
    this.display = display;
    this.length = length;
}

/**
 * push a new element at top of the stack
 */
function push(element) {
    this.dataStore[this.top++] = element;
}
/**
 * return and remove the topmost element
 */
function pop(element) {
    return this.dataStore[--this.top];
}
/**
 * return the element on top, without removing it
 */
function peek() {
    return this.dataStore[this.top - 1];
}
/**
 * clear the list, removing all items
 */
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}
/**
 * return true if stack is empty
 */
function isEmpty() {
    return this.dataStore.length === 0;
}

/**
 * Display this stack
 */
function display() {
    print("stack is " + (this.isEmpty() ? "" : "not ") + "empty");
    print("there are " + this.length() + " elements in this stack");
    var line = "";
    for(var i=this.top-1; i>=0; i--) {
        line += this.dataStore[i] + "->";
    }
    line += "||";
    console.log(line);
}

/**
 * returns how many elements are stored in this stack
 */
function length() {
    return this.top;
}

/**
 * abstract print
 */
function print(data) {
    console.log(data);
}











