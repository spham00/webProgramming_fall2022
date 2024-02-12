/*
<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Demo</title>
    <!-- Let's begin some basic JS -->
    <script>
        // Alert makes a window pop up for the user
        //alert('Hello World!');
    </script>
</head>
<body>
    <h1>We are learning some JavaScript</h1>
    <p>This is a para</p>

    <!-- link to an external JS file
        Notice that it's in the body (put it at the bottom of all your content)
        If we put it at the top, if the script crashes, the other things don't load -->
    <script src="script.js"></script>
</body>
</html>
*/

//alert('Hello world again!');

/* We're logging these lines in the Console
    You can see the Console by opening Inspect
    Good for debugging
    Semicolons are delimiters, JS executes line by line */
console.log('Hello world once again!!');
console.log('Web Programming Course');

console.log(1);
console.log(2);

/* Alternative logging
    Consecutively spaced, not consecutive lines */
console.log(1,2,3,4,5);

// Let's declare some variables
var number = 10;                                        // assignment
console.log('The value of our variable is ' + number);  // concat

var myName = 'Student';                                 // assignment of string
console.log(myName);

var firstName = 'Lara';
var lastName = 'Croft';
console.log(firstName + ' ' + lastName);

var $name = 'Student';                          // can't use numbers for declaration
var _lastname = 'LastStudent';
console.log($name);

// Other ways to declare variables
var x = 10;
console.log(x);

/* LET = a more modern way to declare variables
    JS ES6, you can use Leg and const keywords rather than using var keyword
    Main difference between let and var is "scoping"
        Variables declare by "var" are scoped to immediate function body
        Variables declared by "let" are scoped by "enclosing" block */
let savings = 100;
console.log('Savings: ' + savings);

/* CONST = restrict declaration
    The below code results in error because values can't be reassigned
    or redeclared
const firstName = 'Taylor';
console.log(firstName);
firstName = 'Cloud';
console.log(firstName)
*/

let string1 = 'John';
let string2 = 'Lennon';
console.log(string1, string2);  // chained log

let fullName = string1 + ' ' + string2;
console.log(fullName);

// Strings have properties
console.log(fullName.length);

// access/get characters in a string
console.log(string1[0]);    // displays the first character in string1
console.log(string1[3]);

var myCity = 'New York';
console.log(myCity[0] + myCity[4]);

// Operators: +, -, *, /, **, %
console.log(2 + 2);
var result = 2 + 2;
console.log(result);
console.log(4**4);      // ** is power
console.log(8 % 2);     // modulo can alternate colors
    // does 8  divide evenly into 2, no remainder 0
console.log(4 % 3);     // 4 divides into 3 one time, then 1 remainder

// Increment operator
var myNum = 10;
myNum++;
console.log(myNum);
myNum--;                // decrement
console.log(myNum);

let accountSavings = 0;
console.log(accountSavings);
accountSavings += 500;      // +=, -=, *=, /=, %= exists

// Order of operations
// When you click on an error in Inspect, it'll show you where it is if applicable
let result2 = 2 + (5 * 10) - 1 - (5 + 10);
console.log(result2);

/* Boolean (True and false)
    ==, loose equality (comparison operator)
    ===, strict equality (considers value and data type)
*/
console.log(5 == 5);      // true
console.log(5 == '5');    // looking at the value of 5 regardless of type
console.log(5 === '5');   // false

/* TYPE OF
    - method we can use
    - we can pass variable where we want to check the data type value
*/
var isTrue = 'true';
console.log(typeof(isTrue));    // this returns STRING type
console.log(typeof(99));        // this returns NUMBER

let age = 23;
console.log(age >= 21); // comes out true

// NULL and undefined in JS - these are similar but there are subtle differences
var employeeName = 'Chanyeol';
console.log(employeeName);
// NULL is where we explicitly state that the variable has no value
var cellNumber = null;
console.log(cellNumber);
var spouse; // what if we do not initialize?
console.log(spouse);

/* Comparison operators are the same
    >, >=, <, <= and then:
    !=, not equal to and !== strict not equal to */
var age1 = 23;
console.log(age1 === '23');
console.log(age1 !== '23');     // inverse of above

// If else statement; else if works the same
let isBrazillian = true;
if(isBrazillian) {      // can run it == true or smthg
    // run some code
    console.log('The person is from Brazil');
}
else {
    console.log('The person is not from Brazil');
}

// switch statement
let dayOfWeek = 'Saturday';
switch(dayOfWeek) {
    case 'Monday':
        console.log('The day of the week is Monday');
        break;
    case 'Saturday':
        console.log('The day of the week is Saturday');
        break;
    default:
        break;
}

/* Logical operator
    && = AND, || = OR, ! = NOT */
let age3 = 29;
let hasPaid = true;
if (age3 > 21 && hasPaid) {
    console.log('You are allowed to attend the event');
}
else {
    console.log('You are NOT allowed to attend the event');
}

// Logical NOT operator, so this prints false (inverse)
console.log(!hasPaid);

/* log out numbers 1 thru 10 on console
    for(initialization; some condition; alternating counter) */
for(let counter=1; counter <= 10; counter++) {
    console.log(counter);
    // prints each line
}

// example: looping backwards
for(let i = 10; i >= 1; i--) {
    console.log(i);
}

// WHILE loop
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;    // increment so it's not infinite
}

let j = 10;
while(i >= 1) {
    console.log(i);
    if(i == 1) {
        console.log('We have lift off!');
    }
    i--;
}
