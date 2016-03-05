/**
 * Created by akshaykhot on 2016-03-04.
 */

/**
 * Hashing: A common technique for storing data in such a way that the data
 * can be inserted and retrieved very quickly
 *
 * Benefit: fast insertion, retrieval, removal
 * Drawback: Searching is inefficient
 */

/**
 * Class to represent a hash table
 * @constructor
 */
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showData = showData;
    this.put = put;
    //this.get = get;
}

/**
 * a simple hash function for string keys
 * @param data
 * @returns {number}
 */
function simpleHash(data) {
    var total = 0;
    for(var i=0; i<data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

/**
 * insert the given data in the table, by hasing the given key
 * @param data
 */
function put(key, data) {
    var pos = this.simpleHash(key);
    this.table[pos] = data;
}
/**
 * return the data by parsing the key to hash value
 * @param key
 * @returns {*}
 */
function get(key) {
    return this.table[this.betterHash(key)];
}

/**
 * Display the hash table
 */
function showData() {
    var n = 0;
    for (var i=0; i< this.table.length; i++) {
        if(this.table[i] !== undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

var names = ["Akshay", "Bandya", "Mangya", "Borya"];
var numbers = [1234, 245, 1234, 2343];
var table = new HashTable();
for(var i=0; i< names.length; i++) {
    table.put(names[i], numbers[i]);
}
table.showData();