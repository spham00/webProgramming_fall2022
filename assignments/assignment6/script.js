console.log('1 is next!');

// 1. Log out 1 to 10
for(let one = 1; one <= 10; one++) {
    console.log(one);
}

// Putting log breaks to separate the problems
console.log('Problem 1 is done! 2 is next!');

// 2. Log out every second number from 2 to 10
for(let two = 2; two <= 10; two += 2) {
    console.log(two);
}

console.log('Problem 2 is done! 3 is next!');

// 3. Log out every second number from 10 to 2
for(let three = 10; three >= 2; three -= 2) {
    console.log(three);
}

console.log('Problem 3 is done! 4 is next!');

// 4. Log out numbers from 1 to 10 and whether they are even or odd
for(let four = 1; four <= 10; four++) {
    if(four % 2 == 0) {
        console.log(four + ' is even');
    }
    else {
        console.log(four + ' is odd');
    }
}

console.log('Problem 4 is done! 5 is next!');

/* 5. Using loops and the built in prompt function or modify of label
    element, print out all the characters of a string, each on a separate line
    within the browser console */
let string = prompt('Please enter a string to print out all the characters of.');
for(five = 0; five < string.length; five++) {
    console.log(string[five]);
}
// Please note that entering strings like "hello" shows a 2 next to the outputted 'l',
// indicating that there are 2 'l's next to each other.

console.log('Problem 5 is done! 6 is next!');

/* 6. Using loops and the built in prompt function or modify of label element,
    print out backwards all the characters of a string, each on a separate line
    within the browser console */
let string2 = prompt('Please enter a string to print out all the characters of backwards.');
for(six = string2.length - 1; six >= 0; six--) {
    console.log(string2[six]);
}

console.log('Problem 6 is done!');
