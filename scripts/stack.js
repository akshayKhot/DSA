/**
 * Created by akshaykhot on 2016-02-27.
 */

/**
 * Stack: Last-In First-Out
 */
$(document).ready(function() {
    print(baseChange(125, 8));
    print(isPalindrome("dsfbbedf") ? " String is palindrome " : " String is not a palindrome ");
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
    //get the first letter, push it in the stack
    for(var j=0; j<Math.floor(text.length/2); j++) {
        myStack.push(text.charAt(j));
    }

    var start = Math.floor(text.length/2);
    //if text length is even, add 1 to start(to ignore the middle element)
    if(text.length%2 == 1) {
        start = start+1;
    }
    for(var i=start; i<text.length; i++) {
        if(myStack.pop() !== text.charAt(i)) {
            return false;
        }
    }
    return true;
}









