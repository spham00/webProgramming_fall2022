// Objects - create an object

// key value pairs
let student = {
    name:       'Lara Croft',
    age:        2,
    email:      'lcroft@rowan.edu',
    major:      'Anthropology',
    courses:    ['physical', 'cultural', 'archaeology'],
    isSenior:   true,

    displayName: function() {
        // this is this object
        console.log('Student name is ' + this.name);
    },  // don't forget this comma to list more methods

    // can omit function keyword
    displayAddress() {
        console.log('123 New Road');
    }
}

console.log(student);

// make sure to have parens here to call the function
// don't need to log this since the method contains a console log
student.displayName();

// list a specific element of the object
console.log(student['email']);

// setting or override the properties
student['age'] = 34;
student['email'] = 'lara.croft@rowan.edu';
console.log(student);

// lets do arrays of objects
let students = [
    {name: 'Lara Croft', age: 38, major: 'arch'},
    {name: 'Christina Ricci', age: 40, major: 'acting'},
    {name: 'Kneau Reeves', age: 51, major: 'engineering'}
]

// iterate over this collection of objects
// forEach fires on each item, you can associate a function with it (callback)
// arrow function (param is the instance of the item), hover over it
students.forEach( (param) => {
    console.log(param.name, param.age, param.major);
});

// the Math object (Random)
let random = Math.random();     // displays random number between 0 and 1
random = random * 5;    // prints out random from 0 to 5
random = random + 1;    // from 1 to 6
console.log(random);

let myNum = Math.random();
console.log(myNum);

// floor = lower bound, ceiling = upper bound
console.log(Math.floor(myNum));
console.log(Math.ceil(myNum));

// String methods
let country = 'Brazil';
let upperCase = country.toUpperCase();  // alt = toLowerCase
console.log(upperCase);

// common string methods
console.log(country.includes('zi'));    // substring check

// real world case
let userPassword = 'IloveRowan@2022';

// we want to see if user pass contains >= 9 characters
// and check if it contains @ symbol
if(userPassword.length > 9 && userPassword.includes('@')) {
    console.log('Good password');
}
else {
    console.log('Bad password');
}

let student1 = 'Lara Croft';
let school = 'Rowan';

// let newString = student + ' has been attending ' + school;
// console.log(newString);

// with template strings...
// use `, the char under the tilda
let newString = `The ${student} has been attending ${school}`;

// map method
// can iterate over array of values and return a new array of values
let stockPrices = [123, 232, 554, 23, 445];

// map over each item in the array
let newStockPrices = stockPrices.map( (stock) => {
    // essentially adds 10% of the stock
    return Math.round(stock * 1.1);
});

console.log(newStockPrices);

let citiesArray = ['Sao Paulo', 'Rio', 'Embu', 'Curitiba'];
console.log(citiesArray);

// let's make every city uppercase
let newCitiesArray = citiesArray.map( (city) => {
    return city.toUpperCase();
});

// filter method
let grades = [65, 71, 34, 65, 91, 70, 92];

let geniusStudents = grades.filter( (grade) => {
    // new array includes only grades that are filtered
    return grade > 90;
});

console.log(geniusStudents);

let olderStudents = students.filter( (student) => {
    return student.age >= 40;
});
console.log(olderStudents);

// reduce method
// returns a number and not an array
let grades1 = [65, 71, 30, 61, 92, 75, 93];

// grade (last param) matches to each element in array
let bestStudents = grades.reduce( (total, grade) => {
    if(grade >= 90) {
        total++;
    }

    return total;
    // grade is each grade, 0 is the seed value (for the total)
    // you can start at 1, and outputted would be 3
}, 0);

console.log('The number of best are: ' + bestStudents); // returns 2

// find method
let student2 = grades1.find( (grade) => {
    // stop searching as soon as we find it
    return grade >= 90;
});

console.log(student2);

