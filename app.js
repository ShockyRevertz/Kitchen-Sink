// My Name, Number of States, Addition
var myName = "Cooper White";
const numOfStates = 50;
var smallAddition =  5 + 4;

// Function to say Hello World
function sayHello() {
    alert('Hello World')
}

// Calls the sayHello function
sayHello()

// Function to check age
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page");
    }
};


// Calls the checkAge Function
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// Creates and array of some of my favorite veggies
var favVeggies = ['Onions', 'Broccoli', 'Asparagus', 'Mushrooms']

// Console logs my favVeggies
for (var i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}

// Doggo
var pet = {
    name: 'Joey',
    breed: 'Australian Shepherd'
};

console.log(pet)

// Creates an array of objects representing people
var friends = [
    {name: 'Blake', age: 22},
    {name: 'Alan', age: 87},
    {name: 'Paris', age: 43},
    {name: 'Paul', age: 12},
    {name: 'AnnMarie', age: 20},
]

// Loops through the array of objects
for (i in friends) {
    checkAge(friends[i].name, friends[i].age);
}

// Creates a function that returns the length of a string
function getLength(string) {
    return string.length
}

let length = getLength("Hello World");

if (length % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log("The world is an odd place!");
}