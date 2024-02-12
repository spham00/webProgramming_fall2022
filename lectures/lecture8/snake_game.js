// HTML

/**

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Snake Game</title>

    <!-- for the sake of time -->
    <style>
        #score {
            text-align: center;
            font-size: 140px;
            z-index: 10
        }

        #snakearea {
            position: absolute;
            border: 1px solid black;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
    <!-- let's create a scoreboard -->
    <div id="score">0</div>

    <!-- this canvas is our drawing/rendering area -->
    <canvas id="snakearea" width="400" height="400"></canvas>

    <script src="script2.js"></script>
</body>
</html>
*/

// an array to represent the snake part location
let snake = [
    {x: 200, y: 100},     // head
    {x: 190, y: 100},
    {x: 180, y: 100},
    {x: 170, y: 100},
    {x: 160, y: 100}      // tail
];

// set the velocity of the snake (global variables)
// horizontal
let dx = 10;
// vertical (not moving vertically yet so 0)
let dy = 0;

// get the instance of the CANVAS element
// snakearea is the id for the canvas
const snakearea = document.getElementById('snakearea');

// return a 2d drawing context
const snakearea_context = snakearea.getContext('2d');

// call the main game loop
main();

// let's create a main method
function main() {
    // create a timeout function asynchronously run and call
    setTimeout(function onTick() {
        clearArea();
        moveSnake();
        drawSnake();

        // repeat recursively
        main();
    }, 100);

    //drawSnake();
}

// lets clear the CANVAS
function clearArea() {
    // select a color to fill the drawing area
    snakearea_context.fillStyle = 'gray';

    // draw a FILLED rectangle to cover the entire canvas
    snakearea_context.fillRect(0,0, snakearea.clientWidth, snakearea.clientHeight);
    // refreshing over the snake as we move it
}

// callback function since it's forEach
// drawing the entire snake on the canvas
function drawSnake() {
    // draw each part, passes each xy pair into drawSnakePart function
    snake.forEach(drawSnakePart);
}

// create a function that will draw the snake part
function drawSnakePart(snakePart) {
    // set the color of the snake
    snakearea_context.fillStyle = 'blue';

    // draw a filled rectangle to represent the snake part at the coordinates
    // the part is located
    snakearea_context.fillRect(snakePart.x, snakePart.y, 10, 10);
}

// wire up the document, listens for when a key is pressed
// and feeds that event into the changeDirection
document.addEventListener('keydown', changeDirection);

// implement a function for changing direction of the snake
function changeDirection(event) {
    // want to respond for the up down left right, use keycodes website
    const left_key = 37;
    const right_key = 39;
    const up_key = 38;
    const down_key = 40;

    const keyPressed = event.keyCode;
    //console.log(event.keyCode);

    // use triple equals for type safety
    if(keyPressed === left_key) {
        dx = -10;
        dy = 0;     // not changing direction vertically
    }
    if(keyPressed === up_key) {
        dx = 0;     // not changing direction vertically
        dy = -10;
    }
    if(keyPressed === right_key) {
        dx = 10;
        dy = 0;
    }
    if(keyPressed === down_key) {
        dx = 0;
        dy = 10;
    }
}

// this function will be for moving our snake
function moveSnake() {
    // create the snake's head (new object)
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};

    // add the new head to the beginning of snake body
    // insert element at the start of the array
    snake.unshift(head);

    // remove the tail (last part of the snake body)
    snake.pop();
}
