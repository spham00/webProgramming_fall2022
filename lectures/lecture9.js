// HTML

/**
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript DOM Demos</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
    <h2>Travel Destinations</h2>

    <ul id='city-list' class='cities'>
        <li>Seoul</li>
        <li>Busan</li>
        <li>Gwangju</li>
        <li>Jeju</li>
    </ul>

    <p id="hover-para">Hover over me!</p>

    <!-- don't need a form since we're not retrieving stuff -->
    <input type="text" placeholder="Add City" id="new-city"/>
    <button id="city-button">Show/Hide Cities</button>

    <!-- other stuff -->
    <p class="south-american-city">Curitiba</p>
    <p>Taipei</p>
    <p>Seoul</p>
    <p>Toronto</p>
    <p class="south-american-city">Santiago</p>

    <!-- part one -->
    <div>
        <p id="city-text">New York</p>

        <p id="new-york">New York</p>
        <p id="sao-paulo">Sao Paulo</p>

        <!-- create a button -->
        <button id="my-button">Change City!</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
*/

// CSS

/**
.cities {
    color: blue;
    font-size: 22px;
}

.newCities {
    color: green;
}

.red-class {
    color: red;
}

.blue-class {
    color: blue;
}

.green-class{
    color: green;
}
*/

// Select an element on HTML page; change it using only JS

/** 
 * Document Object Model (DOM)
 * Document represents markup in page
 * Use different gets depending on what's needed
 * 
 * Inject HTML (change the text from New York to Tokyo?)
*/
// document.getElementById('city-text').innerHTML('Tokyo');

// reference this paragraph
const cityParagraph = document.getElementById('city-text');
// this will display a reference (returns '<p id=..' since that's the element)
console.log(cityParagraph);
cityParagraph.innerHTML = 'San Paulo';
// displays the <p id=... with San Paulo as the text instead
console.log(cityParagraph);

// using DOM lets change the style property
const newYork = document.getElementById('new-york');
console.log(newYork);
// notice in index, we don't have the style in there
// but it shows in the Elements tab in Inspect
// we dynamically edited that element
newYork.style.color = 'blue';

// getting the reference and choosing it
document.getElementById('sao-paulo').style.color = 'red';

/**
 * Introducing on-click
 * Wire up the button to respond to events
 *      Get a reference to the button using DOM
 *      When we click, we want to run a function (defined underneath)
 *      You're manipulating the document in real time
 *      In Elements, the markup has changed (see it live in Inspect)
 */
document.getElementById('my-button').onclick = function() {
    // Ensure button has been clicked
    console.log('Button has been clicked...');

    // grab an element using DOM and change that element
    document.getElementById('new-york').innerHTML = 'Osaka';
    // change color
    document.getElementById('new-york').style.color = 'green';
};

/**
 * Query selector
 *      - Note that HTML doesn't have IDs on the consecutive p tags
 *      - Any element it finds FIRST is returned (Curitaba)
 */
const firstPara = document.querySelector('p')
console.log(firstPara);

// rewiring the button element
document.getElementById('my-button').onclick = () => {
    firstPara.style.color = 'red';
    firstPara.style.fontSize = '22px';
};

// Query selector ALL (returns a node list of all elements)
// we wanna traverse through it
// also only one button so it's okay to use queryselector
document.querySelector('button').onclick = () => {
    console.log('Button clicked using query selector');
    const paraList = document.querySelectorAll('p');

    // getting all the things in the collection
    // para means each element in the collection
    paraList.forEach( (para) => {
        // Notice it returns the whole element WITH the p tags
        // also changes the style of those in the divs
        console.log(para);
        para.style.color = 'purple';
        para.style.fontSize = '33px';
    });
};

/**
 * Another way to gather elements using DOM
 * getElementsByClassName
 * Notice the button uses the latest button functionality (last lines of code)
 */
let myButton = document.querySelector('button'); // grab first button
console.log(myButton);
myButton.onclick = () => {
    console.log('myButton was clicked');

    let southAmericanCities = document.getElementsByClassName('south-american-city');
    // returns a collection of html elements, each index contains element + class name
    console.log(southAmericanCities);

    // has indices so let's iterate
    // get the whole lines out
    // let's change the styles now
    for(let i = 0; i < southAmericanCities.length; i++) {
        console.log(southAmericanCities[i]);
        southAmericanCities[i].style.color = 'brown';
        southAmericanCities[i].style.fontSize = '30px';
    }
};

/**
 * getElementsByTagName
 * Kinda like query selector?
 */
let headings = document.getElementsByTagName('h2');
// returns html collection
console.log(headings);
headings[0].style.color = 'blue';

let paragraphs = document.getElementsByTagName('p');
// returns p-tags, it's a prototype (has built-in functions)
console.log(paragraphs);
for(let i = 0; i <paragraphs.length; i++) {
    paragraphs[i].style.color = 'purple';
    paragraphs[i].style.fontWeight = 'bold';
};

/**
 * Create a function that will show/hide cities
 * Hide unordered list and make it appear
 */
let theButton = document.getElementById('city-button');
let cityList = document.getElementById('city-list'); // the ul
let isDisplaying = true;

console.log(theButton);
theButton.onclick = () => {
    console.log(cityList);  // get every city in the collection as 'li's

    if(isDisplaying) {
        cityList.style.display = 'none';
        isDisplaying = false;
    }
    else {
        cityList.style.display = 'block';
        isDisplaying = true;
    }
};

/**
 * AddEventListener takes two params
 *      1 - what are we listening for
 *      2 - callback function
 * Another way to do onclick
 * Also, another example in last lecture
 */
theButton.addEventListener('click', function () {
    cityList.style.color = 'purple';
    cityList.style.fontSize = '30px';
});

/**
 * Wire up the document itseslf
 * Keydown = press any key on the keyboard
 */
document.addEventListener('keydown', () => {
    cityList.style.color = 'blue';
    cityList.style.fontWeight = 'bold';
});

/**
 * Using DOM manipulations for creating and appending elements
 *      1 - document.createElement('');
 *      2 - document.appendChild('something);
 */
let newPara = document.createElement('p');
let newDiv = document.createElement('div');

// not part of the document or anything
console.log(newPara, newDiv);

// before appending, let's add something in the paragraph
newPara.innerHTML = 'I am a new paragraph';

// append the objects to the document body
// notice they're added to the end in the Elements tab
// automatically creates corresponding end tags
document.body.appendChild(newPara);
document.body.appendChild(newDiv);

/**
 * We want to add cities to our cities list
 *      1 - add an event listener to our button
 *      2 - inside the function, create an li element
 *      3 - set inner TEXT of li element to user input
 *      4 - append our new CITY to the city list
 */
const newCity = document.getElementById('new-city');

theButton.addEventListener('click', function () {
    console.log('button clicked');
    let newListItem = document.createElement('li');
    newListItem.innerText = newCity.value;
    cityList.appendChild(newListItem);
}); // it works, just some functionality needs to be commented out above

// Setting attributes
// someElement.setAttribute(name, value)
theButton.addEventListener('click', () => {
    // taking the class attribute and setting it to newCities
    // thus, thanks to style.css,it should turn green
    // you can add multiple classes by putting 'cities newcities'
    cityList.setAttribute('class', 'newcities');
});

/**
 * Class lists (doing it properly w/o using setAttribute)
 * Using DOM manipulations
 * We will update, remove, toggle class lists
 *      1 - add
 *      2 - remove
 *      3 - toggle
 */
// list of properties that are on our elements list
console.log(cityList.classList);

// add a class to the classLit
cityList.classList.add('red-class');
console.log(cityList.classList); // now has red-class

cityList.classList.remove('cities');
console.log(cityList.classList);

// we can also TOGGLE a class ON or OFF
theButton.addEventListener('click', function() {
    cityList.classList.toggle('blue-class');
    // pressing the button multiple times would toggle it
});

/**
 * Mouseover event listener
 * Mouse pointer or cursor over an element on the page
 */
const hover = document.getElementById('hover-para');
hover.addEventListener('mouseover', () => {
    console.log('You hovered over me');
    // change class
    hover.classList.toggle('green-class');
});
