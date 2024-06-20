// 1. Creating a Lesson Plan(Using for loop )
var myWork = [];
for (var i_1 = 1; i_1 <= 10; i_1++) {
    var lesson = {
        name: "Lesson ".concat(i_1),
        status: i_1 % 2 !== 0 ? true : false
    };
    myWork.push(lesson);
}
console.log(myWork);
// 2. Guessing Game (Using while loop )
var maximumValue = 10;
var randomNumber = Math.floor(Math.random() * maximumValue + 1);
console.log("Random Number: ".concat(randomNumber));
var correctGuess = false;
var userGuesses = [3, 5, 1, 7, 9, 6, 10];
var i = 0;
while (!correctGuess && i < userGuesses.length) {
    var guess = userGuesses[i];
    console.log("User guess: ".concat(guess));
    if (guess === randomNumber) {
        correctGuess = true;
        console.log("Congratulations! You've guessed the correct number.");
    }
    else {
        console.log("Wrong guess.");
    }
    i++;
}
if (!correctGuess) {
    console.log("Sorry, you've used all your guesses. The correct number was ".concat(randomNumber, "."));
}
// 3. Counter Incrementer (Using do while loop )
var counter = 0;
var step = 10;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
var myObject = {
    item1: "Mobile",
    item2: "Car",
    item3: "Laptop"
};
for (var property in myObject) {
    console.log(property, myObject[property]);
}
// 5.Exploring Arrays with Loops(Using loop )
var myArray = [];
for (var i_2 = 1; i_2 <= 10; i_2++) {
    myArray.push(i_2);
}
console.log("Array:", myArray);
for (var i_3 = 0; i_3 < myArray.length; i_3++) {
    console.log("Index ".concat(i_3, ": Value ").concat(myArray[i_3]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("Value: ".concat(value));
}
