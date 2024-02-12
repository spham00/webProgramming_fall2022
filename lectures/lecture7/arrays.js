// Arrays
let citiesOfSouthAmerica = ['Sao Paulo', 'Santiago', 'Cusco'];
console.log(citiesOfSouthAmerica);
console.log(citiesOfSouthAmerica[1]);

// overwrite an index
citiesOfSouthAmerica[1] = 'Curitiba';
console.log(citiesOfSouthAmerica);

// find the array length
console.log(citiesOfSouthAmerica.length);

// iteration through array
for(let i = 0; i < citiesOfSouthAmerica.length; i++) {
    console.log(citiesOfSouthAmerica[i]);
}

/*
    1 - push method
    2 - pop method
*/
let countriesArray = ['Brazil', 'Japan', 'Peru'];

// push a new item on the array
// returns new length value
// a destructive method because it change the value of the array length
let newArrayLength = countriesArray.push('Taiwan');
console.log(newArrayLength);    // 4
console.log(countriesArray);

// pop method
// essentially pops off the lat element in the array
// returns the value of popped off element
let result = countriesArray.pop();
console.log(result);        // Taiwan
console.log(countriesArray);

/*
    1 - concat method
    2 - indexOf method
*/
// concat - returns a new array with the added concated values
// not destructive or altering it
let moreCountriesArray = countriesArray.concat('Italy', 'Ireland');
console.log(moreCountriesArray);
console.log(countriesArray);

// indexOf - returns index found
// only returns first item found
// index starts at 0
console.log(moreCountriesArray.indexOf('Italy'));

let moviesArray = ['Matrix', 'Blade Runner', 'Mad Max'];
let studentGrades = [70, 89, 91, 45, 65];

// Create a print array function
function printArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printArray(moviesArray);
printArray(studentGrades);

// Create a function that finds max numbers in a numbers array
function max(array) {
    let maxNum = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    return maxNum;
}
let result1 = max(studentGrades);
console.log(result1);

// function to find the minimum number
const findMinNum = (array) => {
    let minNum = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < minNum) {
            minNum = array[i];
        }
    }
    return minNum;
};
let result2 = findMinNum(studentGrades);
console.log(result2);
