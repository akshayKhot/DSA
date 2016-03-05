/**
 * Created by akshaykhot on 2016-03-03.
 */
/**
 * Dictionary: to store some complex information with a non-complex data
 * e.g. storing phone numbers with names
 * non complex data(in this case, names) is used to perorm the search
 */

function Dictionary() {
    this.datastore = new Array();

    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

/**
 * add a key-value pair in the dictionary
 * @param key
 * @param value
 */
function add(key, value) {
    this.datastore[key] = value;
}

/**
 * return the value at a particular key
 * @param key
 * @returns {*}
 */
function find(key) {
    return this.datastore[key];
}

/**
 * remove the key value pair at a particular key
 */
function remove(key) {
    delete this.datastore[key];
}

/**
 * Display all the key-value pairs in the dictionary
 */
function showAll() {
    console.log("There are " + this.count() + " entries in the dictionary");
    for(var key in this.datastore) {
        console.log(key + "-->" + this.datastore[key]);
    }
}

/**
 * Return the total number of pairs in the dictionary
 * @returns {number}
 */
function count() {
    var count = 0;
    for(var key in this.datastore) {
        count += 1;
    }
    return count;
}

/**
 * remove all the entries in the dictionary
 */
function clear() {
    for(var key in this.datastore) {
        delete this.datastore[key];
    }
}

var addressBook = new Dictionary();
addressBook.add("Akshay", "Hillside Avenue");
addressBook.add("Archana", "Lansdowne Villa");
addressBook.add("Bidyut", "Shelley Street");

addressBook.showAll();
console.log("Address of Akshay: " + addressBook.find("Akshay"));
addressBook.remove("Archana");
addressBook.showAll();

addressBook.clear();
addressBook.showAll();
