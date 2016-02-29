/**
 * Created by akshaykhot on 2016-02-27.
 */

/**
 * Stack: Last-In First-Out
 */
$(document).ready(function() {
    print(baseChange(125, 8));
    print(isPalindrome("racecar") ? " String is palindrome " : " String is not a palindrome ");
    print(isPalindrome("abccba") ? " String is palindrome " : " String is not a palindrome ");

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
    return this.top === 0;
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

/**
 * Change the base from decimal to a given base
 * @param number
 * @param newBase
 */
function baseChange(number, newBase) {

    var newNumber = "";
    var myStack = new Stack();
    while(number > 0) {
        myStack.push(number%newBase);
        number = Math.floor(number/newBase);
    }
    while(!myStack.isEmpty()) {
        newNumber += myStack.pop();
    }
    return newNumber;
}

/**
 * Check if the given text is palindrome or not
 * @param text
 * @return true if text is a palindrome, false otherwise
 */
function isPalindrome(text) {

    var myStack = new Stack();
    //get the first letter, push it in the stack and repeat
    for(var j=0; j<text.length; j++) {
        myStack.push(text[j]);
    }

    var reverse = "";
    while(!myStack.isEmpty()) {
        reverse += myStack.pop();
    }
    return reverse === text;
}









