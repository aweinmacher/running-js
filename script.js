//********************** 5 - INTRO TO JAVASCRIPT PART 1 ***********************
// Individual Exercise 1
var name = prompt("What's your name?");
var age = prompt("How old are you?");
if (age < 18) {
    alert(name + ", you're too young for a drink so far.");
} else {
    alert("Here's your drink, " + name);
}
// Individual Exercise 2
var citizenship = prompt("What's your citizenship?")
if (citizenship === "Israeli" || citizenship === "israeli") {
    alert("Please, pass")
} else {
    alert("Sorry, no entrance for you")
}
// Individual Exercise 3
var gender = prompt("What's your gender?");
var age = prompt("How old are you?");
if (gender === "female" && age >= 18) {
    alert("Welcome and enjoy your drink!")
} else if (gender === "female" && age < 18) {
    alert("Welcome, but please keep away from alcohol")
} else if (gender === "male" && age >= 18) {
    alert("Please, pay for your pass&drink and enjoy the party!")
} else {
    alert("Please, pay for your pass, but stay away from alcohol.")
}

//********************** 5 - INTRO TO JAVASCRIPT PART 2 ***********************
//do... while loop
var number = prompt("number?");
number = parseInt(number);
do {
    num = parseInt(number, 10);
    console.log("I'm the number " + number);
    number = number + 1;
} while (number < 12);

//Fizz Buzz Challenge
for (let x = 0; x <= 20; x++) {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log("fizzbuzz")
    } else if (x % 5 === 0) {
        console.log("fizz");
    } else if (x % 3 === 0) {
        console.log("buzz");
    } else {
        console.log(x);
    }
}

//Arrays
var family = ["Aaron", "Sarah", "Isaiah", "Jeremiah"];
family.splice(0, null, "Larry");
console.log(family);
// SPLICE returns that it has taken out, right?

//PARTNER EXERCISE 1
var restaurants = ["Cofix", "P2", "CoffeeBeen", "Aroma", "ShocoLulu"];
for (let i = 0; i < restaurants.length; i++) {
    console.log(restaurants[i]);
}
//PARTNER EXERCISE 2
var numbers = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum = sum + numbers[i];
}
console.log(sum);
var avg = sum / numbers.length;
console.log(avg);

//PARTNER EXERCISE 3
var myColor = ["Red", "Green", "White", "Black"];
string = myColor.join(" + ");
console.log(string);

//PARTNER EXERCISE 4
var numbers = "67548076";
function addDash(arr) {
    var dash = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i+1] % 2 === 0) {
            dash += arr[i] + "-";
        } else dash += arr[i];
    }
    return dash;
    console.log(dash);
}
addDash(numbers);
