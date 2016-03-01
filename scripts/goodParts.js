/**
 * Created by akshaykhot on 2016-02-29.
 */

/**
 * When a function is stored as a property of an object,
 * it's called a method
 */
var myObject = {
    property1: "hello",
    property2: "world",

    //doSomething is a method of myObject
    doSomething: function() {
        //when doSomething will be invoked,
        //'this' will refer to myObject
        //this binding of 'this' to 'myObject' happens at runtime
    },

    anotherFunction: function() {
        var that = this;
        var helper = function() {
            console.log(that.property1 + " " + that.property2);
        };
        helper();
    }
};

var foo = function() {
    var a = 3, b = 5;
    var bar = function() {
        var a = 10, b = 7, c = 11;
        console.log("a = " + a + " b = " + b + " c = " + c);

        a += b + c;
        console.log("a = " + a + " b = " + b + " c = " + c);
    };
    bar();
    console.log("a = " + a + " b = " + b);
};

foo();
