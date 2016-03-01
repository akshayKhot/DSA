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
    this.front = 0;
    this.back = 0;

    /**
     * add element at the back of the queue
     * @param element
     */
    this.enqueue = function(element) {
        this.dataStore[this.back++] = element;
    };

    /**
     * remove and return the element at the front of the queue
     * @return element
     */
    this.dequeue = function() {
        //check if the queue is empty, if yes return -1
        if(this.front == this.back) {
            say("The queue is empty");
            return -1;
        } else {
            var head = this.dataStore[this.front];
            //move all elements one step forward
            for(var i=0; i<this.back-1; i++) {
                this.dataStore[i] = this.dataStore[i+1];
            }
            //update back
            this.back--;
            return head;
        }
    };

    /**
     * return the element at the front, without removing it from the queue
     * @returns {*}
     */
    this.peek = function peek() {
        return this.dataStore[this.front];
    };

    /**
     * return the number of elements in the queue
     * @returns {Number}
     */
    this.length = function() {
        return this.back - this.front;
    };

    /**
     * remove all the elements from the queue.
     * reset front and back to 0
     */
    this.clear = function() {
        this.dataStore = [];
        this.front = 0;
        this.back = 0;
    };

    /**
     * Display the queue and the front and back positions
     */
    this.display = function() {
        say("there are " + this.length() + " elements in the queue.")
        var output = "front->";
        for(var i=0; i<this.back; i++) {
            output += " " + this.dataStore[i] + " ";
        }
        output += "->back";
        say(output);
        say("front: " + myQueue.front + " back: " + myQueue.back);
    };
}


var myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(23);
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(23);
myQueue.display();

say("The next element to be removed is: " + myQueue.peek());
say("removed element: " + myQueue.dequeue());
myQueue.display();

myQueue.clear();
myQueue.display();

function say(data) {
      console.log(data);
}