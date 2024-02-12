// functions
function logHello() {
    console.log('Hello world');
}

function alertHello() {
    alert('Hello again');
}

// call the function
// gets called
logHello();
alertHello();

// don't explicitly define what the type is
function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Alina');

function logAge(age) {
    console.log('You are ' + age + ' years of age');
}

logAge(20);

// multiple params
function logDetails(name, age) {
    console.log('Your name is ' + name +
        ' and you are ' + age + ' years old');
}

logDetails('Joy', 19);

// function to calculate the area
function calculateArea(width, length) {
    console.log(width * length);
}

calculateArea(100, 24);

function calculateSavings(amount, months) {
    alert(amount * months);
}

calculateSavings(100, 24);

// To highlight + comment, CTRL + /

function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

sum(1, 2, 3);

// return keyword
function calculateSavings2(amount, months) {
    console.log(amount * months);
    let result = amount * months;
    return result;
}

let calculationResult = calculateSavings1(344, 33);
alert('The result is ' + calculationResult);

function doubleMe(number) {
    return number * 2;
}
let doubledNumber = doubleMe(4);
console.log(doubleNumber);

// functions that return a boolean
function isEven(number) {
    if(number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let isNumberTwoEven = isEven(2);
alert('Is the number 2 even? ' + isNumberTwoEven);

// determine if bank can lend money to someone
let savingsAccount = 120000;
let isDebtFree = true;

function willMortageBeApproved(isClientDebtFree, savings) {
    if(savings >= 100000 && isClientDebtFree) {
        return true;
    }
    else {
        return false;
    }
}
let decision = willMortageBeApproved(isDebtFree, savingsAccount);
if(decision) {
    alert('Congratulations!');
}
else {
    alert('You have not been approved.');
}

// There are two ways to declare a function in JS

// recall
function sayHello1() {
    console.log('Hello');
}
sayHello1(); // invoke

// function expression
// to override the method??
var sayHelloAgain = function() {
    console.log('Hello again!');
}
sayHelloAgain();

// hoisting functions
// the function call is above the method (hoists it up)
sayHello2();
function sayHello2() {
    console.log('Hello2');
}

// what if we use "function expression", DOES NOT WORK
// MUST define first before calling for these ones
// sayHello3();
// var sayHello3 = function() {
//     console.log('We have said hello too many times');
// }

/*
    3 ways
        function myFunction()
        var myFunction = function()
        arrow function
*/

// arrow functions, no params
const sayHello4 = () => {
    console.log('Hello world in an arrow!');
};  // <-- notice the delimiter semicolon
sayHello4();

// arrow function with parameters
const doubleMe1 = (number) => {
    return number * 2;
};
let double200 = doubleMe(200);
console.log(double200);

const addNumbers1 = (num1, num2) => {
    return (num1 + num2);
};
let result1 = addNumbers1(8, 9);
alert(result);
