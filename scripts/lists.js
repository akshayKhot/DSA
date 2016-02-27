/**
 * Created by akshaykhot on 2016-02-26.
 */
$(document).ready(function() {

    var names = new List();
    var numbers = new List();
    names.append("akshay");
    names.append("khot");

    names.remove("khot");

    names.insert("khot", "akshay");

    //names.clear();

    names.front();
    names.append("Don");
    names.append("Draper");
    names.append("xtra");
    names.next();
    names.next();

    //iterate through a list
    for(names.front(); names.currPos() < names.length(); names.next()) {
        //print("iterate " + names.getElement());
    }

    numbers.append(1);
    numbers.append(10);
    numbers.append(34);
    numbers.append(2);
    numbers.append(5);

    var person1 = new Person("akshay", "male");
    var person2 = new Person("kunal", "female");
    var person3 = new Person("bandya", "male");
    var person4 = new Person("mangya", "female");
    var person5 = new Person("amey", "male");
    var person6 = new Person("abhiyash", "male");

    var people = new List();
    people.append(person1);
    people.append(person2);
    people.append(person3);
    people.append(person4);
    people.append(person5);
    people.append(person6);
    display(people);

});

//Display people in the same gender
var display = function(listOfPeople) {
    var males = [];
    var females = [];
    //iterate through people
    for(listOfPeople.front(); listOfPeople.currPos() < listOfPeople.length(); listOfPeople.next()) {
        if(listOfPeople.getElement().gender === "female") {
            females.push(listOfPeople.getElement().name);
        } else {
            males.push(listOfPeople.getElement().name);
        }
    }
    print("Males: " + males);
    print("Females: " + females);
};


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
    this.insertIfLargest = insertIfLargest;
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

//insert element in the list only if it's larger than all current elements
function insertIfLargest(element) {
    this.front();
    var max = this.getElement();

    //find the largest element in the list
    for(var i = this.pos + 1; i<this.dataStore.length; i++) {
        if(isGreater(this.dataStore[i], max)) {
            print("comparing " + this.dataStore[i] + " with " + max);
            max = this.dataStore[i];
        }
        print(max);
    }

    //compare element with max element and insert if it's larger
    if(isGreater(element,max)) {
        this.append(element);
        return true;
    }
    return false;
}

/**
 * helper function to compare two elements
 * @param element1
 * @param element2
 * @return true if element1 > element2, else false
 */
function isGreater(element1, element2) {
    if(typeof element1 == "string" && typeof element2 == "string") {
        return element1.toLowerCase() > element2.toLowerCase();
    }
    return element1>element2;
}


/**
 * Person constructor
 * @param name and gender
 */
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}


/**
 * abstract print
 * @param item
 */
var print = function(item) {
    console.log(item);
};



















