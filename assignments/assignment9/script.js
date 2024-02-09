/**
 * getElementById + styling with color (blue) immediately
 * without the usage of a button
 */
document.getElementById('directions').style.color = 'blue';

/**
 * Wire up the button for compliment game for onclick
 * Change the elements color based on click and on a user click
 * Using a query selector since this is the FIRST button
 */
let firstButton = document.querySelector('button');
firstButton.onclick = () => {
    const compliment = document.getElementById('compliment');
    compliment.innerHTML = 'Your eyes are stunning!';
    compliment.style.color = 'red';
    firstButton.innerText = 'You got your two compliments already!';
}

/**
 * Wire up button to make all h1's smaller
 * Change the type of text based on click
 * Using query selector ALL since we're only using h1's here
 * Changing the h1's to p's
 */
let secondButton = document.getElementById('font-size-change');
secondButton.onclick = () => {
    const headings = document.querySelectorAll('h1');
    
    // iterate through h1's and change the text
    headings.forEach((heading) => {
        heading.innerHTML = 'You have defeated us and made us smaller...';
        heading.outerHTML = '<p>' + heading.innerHTML + '</p>';
    });

    secondButton.innerHTML = 'You did it! Thanks!';
}

/**
 * getElementsByTagName
 *      - fetch an element for the div
 *      - fetch all the paragraphs in the div
 *      - style a border around the div
 *      - count how many elements are in the div
 */
let aDiv = document.getElementById('tagDiv');
aDiv.style.border = 'solid black 2px';
let divParas = aDiv.getElementsByTagName('p');
let thirdButton = document.getElementById('count-div');

thirdButton.onclick = () => {
    thirdButton.innerHTML = 'There are ' + divParas.length + ' paragraphs';
};

/**
 * getElementsByClassName
 *      - color all the paragraphs green
 *      - change their inner text
 */
let greenThings = document.getElementsByClassName('color-green');
let fourthButton = document.getElementById('green-button');
fourthButton.onclick = () => {
    for(let i = 0; i < greenThings.length; i++) {
        greenThings[i].innerHTML = 'Thanks for changing our color to green!';
        greenThings[i].style.color = 'green';
    }
    fourthButton.innerHTML = 'You made them green, good job!';
};

/**
 * Making content appear and disappear thanks to hover
 * Making that mouseover
 * Add event listener used for mouseover
 */
const hover = document.getElementById('eevee-hover');
let isDisplaying = true;
hover.addEventListener('mouseover', () => {
    let comment = document.getElementById('eevee-comment');
    
    // used opacity since display didn't work for images
    if(isDisplaying) {
        comment.innerHTML = 'The Eevee was shy and hid from you!';
        hover.style.opacity = '0';
        isDisplaying = false;
    }
    else {
        comment.innerHTML = 'The Eevee reappeared when you checked again!';
        hover.style.opacity = '1';
        isDisplaying = true;
    }
});

/**
 * Give users ability to dynamically add to list thanks to value
 * Create a li element and append child
 */
let newFood = document.getElementById('another-food');
let fifthButton = document.getElementById('add-button');
let foodList = document.getElementById('food-list');

fifthButton.addEventListener('click', function () {
    let newListItem = document.createElement('li');
    newListItem.innerText = newFood.value;
    foodList.appendChild(newListItem);
    newFood.value = ''; // reset textbox so it's not added twice
});

/**
 * Add, remove, toggle with classLists on the food list
 */
let addButton = document.getElementById('purple-button');
let removeButton = document.getElementById('black-button');
let toggleButton = document.getElementById('toggle-button');

// adding purple class
addButton.addEventListener('click', function () {
    foodList.classList.add('purple-class');
});
// removing purple class
removeButton.addEventListener('click', function () {
    foodList.classList.remove('purple-class');
});
// toggling background
toggleButton.addEventListener('click', function () {
    foodList.classList.toggle('background');
});
