/*
    Write a JavaScript function which accept a string as input and
    swap the case of each character. For example if you input
    'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/
function reverseCase(string) {
    let reversed = '';  // string with reversed cases that we'll return
    let letter = '';    // holds the current letter we're checking
    for(let i = 0; i < string.length; i++){
        letter = string.charAt(i);
        
        // if letter is uppercase, this will come out true
        // thus convert it to lowercase and add to string
        if(letter.toUpperCase() === letter) {
            reversed = reversed + letter.toLowerCase();
        }
        // else, convert it to uppercase and add
        else {
            reversed = reversed + letter.toUpperCase();
        }
    }
    return reversed;
}

// test out reverseCase
let reversedCaseString = reverseCase('The Quick Brown Fox');
console.log(reversedCaseString);
let reversedCaseString2 = reverseCase('rUN aWAY wITH mE');
console.log(reversedCaseString2);
let reversedCaseString3 = reverseCase('mIs MaTcHeD cAsEs');
console.log(reversedCaseString3);

/*
    Write a JavaScript function which accept a number as input and
    insert dashes (-) between each two even numbers. For example if you accept
    025468 the output should be 0-254-6-8.
*/
function addDash(number) {
    let numberArray = number.split(''); // split the number into an array
    console.log(numberArray);
    let firstEven = null;                       // holds the 'first' even number found
    let currentNumber;                          // holds current number in the array
    let dashed = '';                            // holds the result of the function

    for(let i = 0; i < numberArray.length; i++) {
        currentNumber = parseInt(numberArray[i]);
        console.log(currentNumber);

        // find firstEven number
        if(firstEven === null) {
            // if currrentNumber is even, we found firstEven
            if(currentNumber % 2 === 0) {
                firstEven = currentNumber;
            }
        }
        // we have a value for firstEven (which is even)
        else {
            // if currentNumber is even, we found it
            if(currentNumber % 2 === 0) {
                // add the dash and since currentNum is even,
                // assign it to firstEven
                dashed = dashed + '-';
                firstEven = currentNumber;
            }
            // if it's not, that means it's odd, so reset firstEven
            else {
                firstEven = null;
            }
        }

        // add currentNumber to the string regardless of what happens
        dashed = dashed + currentNumber.toString();
    }

    return dashed;
}

// test out addDash
console.log(addDash('08835'));
console.log(addDash('025468'));
console.log(addDash('5729344'));

/*
    Write a JavaScript function to get the last element of an array.
    Passing a parameter 'n' will return the last 'n' elements of the array.
*/
function last(array, n = 0) {
    // n = 0 because n is an optional parameter, available in ES6
    // if no optional parameter given
    if(n == 0) {
        return array[array.length - 1];
    }
    // if n is greater or equal to the array.length, return entire array
    else if(n >= array.length) {
        return array;
    }
    // else (valid n), retrieve appropriate values
    else {
        // i represents the number of times we need to pop the first element
        // decrement after each pop
        for(let i = array.length - n; i > 0; i--) {
            array.shift();  // pops first element from array
        }
        return array;
    }
}

// test out last
console.log(last([7, 9, 0, -2]));       // -2
console.log(last([7, 9, 0, -2],3));     // [9, 0, -2]
console.log(last([7, 9, 0, -2],6));     // [7, 9, 0, -2]
