// HTML

/**
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Calculator</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <!-- calculator -->
    <div class="calculator">
        <!-- display -->
        <div class="calculator-display">
            <h1>0</h1>
        </div>

        <!-- buttons -->
        <div class="calculator-buttons">
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button>

            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button>

            <button class="clear" id="clear-button">C</button>
        </div>
    </div>

    <script src="script3.js"></script>
</body>
</html>
*/

// CSS

/**
.calculator {
    background: blue;
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 5px 30px -5 rgba(0,0,0,0.6);
}

.calculator-display {
    background: black;
    color: white;
    margin:0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 10px 10px 0 0;
    max-width: 100%;
}
*/

// controls what is displayed at h1
const calculatorDisplay = document.querySelector('h1');
const inputButtons = document.querySelectorAll('button');
let awaitingNextValue = false;

// uses the id from html (very important, also helps since it's 1 item)
const clearButton = document.getElementById('clear-button');

function resetAll() {
    calculatorDisplay.textContent = '0';
}

// listen for the clear button event
clearButton.addEventListener('click', resetAll);

// add event listeners for numbers (for now)
// for each element in the collection, wire it up to event handler
inputButtons.forEach( (inputButton) => {
    inputButton.addEventListener('click', 
        ()=> sendNumberValue(inputButton.value));
});

// changes display
function sendNumberValue(number) {
    // Replace current display value if first value is entered
    if(awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    }
    else {
        // if display value = 0, replace it, if not add number to display value
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

//sendNumberValue(9875);
