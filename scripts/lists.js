/**
 * Created by akshaykhot on 2016-02-26.
 */
$(document).ready(function() {

    var names = new List();
    names.append("akshay");
    names.append("khot");

    print(names.toString());
    names.remove("khot");
    print(names.toString());

    names.insert("khot", "akshay");
    print(names.toString());

    //names.clear();

    print(names.contains("akshay"));
    print(names.contains("Manchester"));

    names.front();
    print(names.getElement());
    names.append("Don");
    names.append("Draper");
    names.next();
    names.next();
    names.prev();
    names.end();

    //iterate through a list
    for(names.front(); names.currPos() < names.length(); names.next()) {
        print("iterate " + names.getElement());
    }
    //reverse iterate through the list
    for(names.end(); names.currPos() >= 0; names.prev()) {
        print(names.currPos() + " " + names.getElement());
        if(names.currPos() == 0) {
            break;
        }
    }
});


/**
 * constructor function to create a list
 */
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    //this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

/**
 * append the given item at the next aailable position
 */
var append = function(element) {
    this.dataStore[this.listSize++] = element;
};

/**
 * remove an element from the list and return true if removal was successful
 */
var remove = function(element) {
    //first, find the element in the list
    var indexOfElement = this.dataStore.indexOf(element);
    if(indexOfElement !== -1) {
        //remove that element from index using splice
        this.dataStore.splice(indexOfElement, 1);
        this.listSize -= 1;
        return true;
    }
    print("Element not found");
    return false;
};

/**
 * return the number of elements
 */
var length = function() {
    return this.listSize;
};

/**
 * display the list
 */
var toString = function() {
    return this.dataStore;
};

/**
 * insert an element into a list, return true if success
 */
var insert = function(element, afterThis) {
    var insertPos = this.dataStore.indexOf(afterThis);
    if(insertPos !== -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        this.listSize += 1;
        return true;
    }
    return false;
};

/**
 * clears out all the elements of a list
 * reset listSize and pos
 */
var clear = function () {
    this.dataStore = [];
    this.listSize = this.pos = 0;
};

/**
 * determine if a given element is in a list
 */
var contains = function(element) {
    return this.dataStore.indexOf(element) !== -1;
};

//set current pos to front of the list
function front() {
    this.pos = 0;
}
//set current pos to the end of the list
function end() {
    this.pos = this.listSize-1;
}
//move current pos backone element
function prev() {
    if(this.pos > 0) {
        this.pos -= 1;
    }
}
//move current position forward one element
function next() {
    if(this.pos < this.listSize) {
        this.pos += 1;
    }
}
//return current position
function currPos() {
    return this.pos;
}
//move the current osition to specified position
function moveTo(newPos) {
    this.pos = newPos;
}
//return element at current position
function getElement() {
    return this.dataStore[this.pos];
}

/**
 * abstract print
 * @param item
 */
var print = function(item) {
    console.log(item);
};



















