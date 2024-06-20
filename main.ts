// 1. Creating a Lesson Plan(Using for loop )

type Mywork = {
    name: string;
    status: boolean
}[]

let myWork: Mywork = []

for (let i = 1; i <= 10; i++) {

    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 !== 0 ? true : false
    };
    myWork.push(lesson);
}
console.log(myWork);

// 2. Guessing Game (Using while loop )

let maximumValue = 10;
const randomNumber = Math.floor(Math.random() * maximumValue + 1);
console.log(`Random Number: ${randomNumber}`);

let correctGuess = false;

let userGuesses = [3, 5, 1, 7, 9, 6, 10];

let i = 0;
while (!correctGuess && i < userGuesses.length) {
    let guess = userGuesses[i];
    console.log(`User guess: ${guess}`);

    if (guess === randomNumber) {
        correctGuess = true;
        console.log("Congratulations! You've guessed the correct number.");
    } else {
        console.log("Wrong guess.");
    }

    i++;
}

if (!correctGuess) {
    console.log(`Sorry, you've used all your guesses. The correct number was ${randomNumber}.`);
}

// 3. Counter Incrementer (Using do while loop )

let counter = 0;
let step = 10;

do{
    console.log(counter);
    counter += step
}while(counter < 100)

// 4.Exploring Objects with for...in Loop

type MyObject = {
    item1:string,
    item2:string,
    item3:string
}

let myObject:MyObject = {
    item1:"Mobile",
    item2:"Car",
    item3:"Laptop"
}

for (let property in myObject) {
    console.log(property, myObject[property]);
}

// 5.Exploring Arrays with Loops(Using loop )

let myArray: number[] = [];

for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}

console.log("Array:", myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(`Index ${i}: Value ${myArray[i]}`);
}

for (const value of myArray) {
  console.log(`Value: ${value}`);
}