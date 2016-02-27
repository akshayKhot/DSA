/**
 * Created by akshaykhot on 2016-02-25.
 */

$(document).ready(function() {

    //arrays();
    //arrayExercise();

    $("#first").css({
        "height": "100px",
        "width": "200px",
        "background-color": "red",
        "border": "1px solid black"
    });
    $("#first").dblclick(function() {

        $(this).css({
            "background-color": "green"
        });
    });
});

var arrays = function() {

    var numbers = [1,2,3,4,5];
    console.log(Array.isArray(numbers));
    print(numbers["3"]);

    //String to Array
    var line = "My name is Akshay";
    var words = line.split(" ");
    print(words);

    //Array to String
    var sentence = words.join(" ");
    print(sentence);

    //to see if an element exists in an array, use indexOf
    print(numbers.indexOf(3));

    //concatenate two arrays into another array
    var boys = ["Akshay", "Kunal"];
    var girls = ["Priyanka", "Tejal"];
    var pupils = boys.concat(girls);
    print(boys + " " + girls + " " + pupils);

    //get a subset from an array, changing the original
    var subset = numbers.splice(0,5);
    print(subset);

    //unshift adds to the front of an array, shift removes it
    var arr = [1,2,3,4,5,-2];
    arr.unshift(0);
    arr.shift();

    //add elements anywhere, use splice(index, 0, newElements)
    newA = [100, 200];
    arr.splice(1, 0, 100, 200);
    print(arr);
    //remove elemets using splice(index, noOfItemsToRemove)
    arr.splice(1, 2);
    print(arr);

    //sort numbers
    var compare = function(num1, num2) {
        return num1 - num2;
    }
    print([100,10,30,20,1].sort()); //prints 1,10,100,20,30
    print([100,10,30,20,1].sort(compare)); //prints 1,10,20,30,100

    //iterator functions
    print(arr.forEach(doStuff));
    print(arr.every(greaterThanZero));
    print(arr.some(greaterThanZero));
};
var doStuff = function(num) {
    print("Hello " + num);
};
var greaterThanZero = function(num) {
    return num>0;
};

var arrayExercise = function() {
    var grades = {
        grades: [1,2,4,5],

        addGrade: function(grade) {
            this.grades[this.grades.length] = grade;
        },
        displayGradeAverage: function() {
            var gpa = 0;
            for(var i=0; i<this.grades.length; i++) {
                gpa += this.grades[i];
            }
            print(gpa/this.grades.length);
        }
    };

    var Store = {
        letters: ["a", "k", "s", "h", "a", "y"],

        displayAsWord: function() {
            print(this.letters.join(""));
        }
    };

    Store.displayAsWord();

    grades.displayGradeAverage();
    grades.addGrade(10);
    grades.displayGradeAverage();

    var words = ["bat", "cat"];
    print("forward: ");
    for(var i=0; i<words.length; i++) {
        print(words[i]);
    };
    print("backword: ");
    for(var i=words.length-1; i>=0; i--) {
        print(words[i]);
    };
};

var print = function(arg) {
    console.log(arg);
};


