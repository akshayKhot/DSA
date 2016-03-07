/**
 * Created by akshaykhot on 2016-03-07.
 */
var speak = function(data) {
    console.log(data);
};

/**
 * create a new set
 */
function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.display = display;
    this.contains = contains;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
}

/**
 * add a new element in the set (only if doesn't exist already)
 */
function add(element) {
    if(!this.contains(element)) {
        this.dataStore.push(element);
    }
}

/**
 * if the given element exists, remove it from the set
 * @param element to remove
 */
function remove(element) {
    if(this.contains(element)) {
        this.dataStore.splice(this.dataStore.indexOf(element), 1);
    }
}

/**
 * return the number of elements in this set
 */
function size() {
    return this.dataStore.length;
}

/**
 * Display the given set
 */
function display() {
    var output = "{ ";
    for(var i=0; i<this.dataStore.length; i++) {
        output += this.dataStore[i] + " ";
    }
    output += "}";
    speak(output);
}

/**
 * return true if the given element exists in the set
 * @param element
 * @returns {boolean}
 */
function contains(element) {
   return this.dataStore.indexOf(element) > -1;
}

/**
 * perform the union of two sets and return new set
 * @param newSet the set to be united with the callee set
 * @return unionSet the union of the two sets
 */
function union(newSet) {
    var unionSet = new Set();
    //copy all the elements of the first set
    for(var i= 0; i<this.dataStore.length; i++) {
        unionSet.add(this.dataStore[i]);
    }
    //copy the elements in newSet which are not in mySet to unionSet
    for(var j=0; j<newSet.dataStore.length; j++) {
        unionSet.add(newSet.dataStore[j]);
    }
    return unionSet;
}

/**
 * Perform intersection of two sets
 * @param newSet the set to be intersected with the callee set
 * @returns {Set} intersection of two sets
 */
function intersect(newSet) {
    var interSect = new Set();
    for(var i=0; i<this.dataStore.length; i++) {
        if(newSet.contains(this.dataStore[i])) {
            interSect.add(this.dataStore[i]);
        }
    }
    return interSect;
}

/**
 * returns true if the callee set is a subset of the given set
 */
function subset(set) {
    if(this.size() > set.size()) {
        return false;
    } else {
        for(var i=0; i<this.dataStore.length; i++) {
            if(!set.contains(this.dataStore[i])) {
                return false;
            }
        }
    }
    return true;
}

/**
 * return set of all elements in the callee set which are not in the given set
 */
function difference(secondSet) {
    var diff = new Set();
    for(var i=0; i<this.size(); i++) {
        if(!secondSet.contains(this.dataStore[i])) {
            diff.add(this.dataStore[i]);
        }
    }
    return diff;
}

var mySet = new Set();
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.display();
mySet.remove(5);
mySet.display();
mySet.add(5);
speak("MySet: ");
mySet.display();

var newSet = new Set();
newSet.add(3);
newSet.add(11);
newSet.add(15);
speak("NewSet: ");
newSet.display();

var unionSet = mySet.union(newSet);
speak("UnionSet: ");
unionSet.display();

var interSet = mySet.intersect(newSet);
speak("InterSet: ");
interSet.display();

var sub = new Set();
sub.add(5);
sub.add(7);
speak(sub.subset(mySet));
speak(mySet.subset(sub));

var diffSet = mySet.difference(newSet);
diffSet.display();