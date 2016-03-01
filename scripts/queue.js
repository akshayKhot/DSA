/**
 * Created by akshaykhot on 2016-03-01.
 */

//enqueue: insert a new element at the backend of a queue
//e.g. (front)1-2-3-4-5(back) : enqueue(6) -> (front)1-2-3-4-5-6(back)
//dequeue: remove an element from the front of the queue
//e.g. (front)1-2-3-4-5(back) : dequeue() -> (front)2-3-4-5-6(back)

/**
 * creates a new queue
 * @constructor
 */
function Queue() {
    this.dataStore = [];

    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.isEmpty = isEmpty;
    this.display = display;
}

    /**
     * add element at the back of the queue
     * @param element
     */
    function enqueue(element) {
        this.dataStore.push(element);
    }

    /**
     * remove and return the element at the front of the queue
     * @return element
     */
    function dequeue() {
        return this.dataStore.shift();
    }

    /**
     * Getters for the first and last elements in the queue
     * @returns {*}
     */
    function front() {
      return this.dataStore[0];
    }
    function back() {
        return this.dataStore[this.dataStore.length-1];
    }

    /**
     * returns true if the queue is empty
     * @returns {boolean}
     */
    function isEmpty() {
        return this.dataStore.length === 0;
    }

    /**
     * Display the queue and the front and back positions
     */
    function display() {
        say("there are " + this.dataStore.length + " elements in the queue.")
        var output = "front->";
        for(var i=0; i<this.dataStore.length; i++) {
            output += " " + this.dataStore[i] + " ";
        }
        output += "->back";
        say(output);
        say("front: " + myQueue.front() + " back: " + myQueue.back());
    }



var myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(23);
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(23);
myQueue.display();

say("The next element to be removed is: " + myQueue.front());
say("removed element: " + myQueue.dequeue());
myQueue.display();

function say(data) {
      console.log(data);
}