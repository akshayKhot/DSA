/**
 * Created by akshaykhot on 2016-02-27.
 */

/**
 * Stack: Last-In First-Out
 */

/**
 * construct a new Stack
 * @constructor
 */
function Stack() {
    this.top = 0;
    this.dataStore = [];

    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.empty = empty;
}

/**
 * push a new element on top of the stack
 */
function push(element) {
    this.dataStore[top++] = element;
}