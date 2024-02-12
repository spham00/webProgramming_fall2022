/*
HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman Game!</title>

    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <!-- parent divs are usually called containers and contain child items
        the drawing of svg is based on origin (0,0) -->
    <div class="game-container">
        <!-- it's good to draw it and plan it out -->
        <svg height="250" width="200" class="figure-container">
            <!-- gallows -->
            <line x1="60" y1="20" x2="140" y2="20"/>
            <line x1="140" y1="20" x2="140" y2="50"/>

            <!-- head; x and y are the center of the circle,
                so cx and cy are the place where the circle is -->
            <circle cx="140" cy="70" r="20" class="figure-part"/>

            <!-- body; we're going to start the line at 140 y (connect)
                and 90 cuz 70 + 20 (radius) = 90, where we want the line to start,
                x2 and y2 represent the ending point; can put stroke property in CSS -->
            <line x1="140" y1="90" x2="140" y2="150" class="figure-part"/>

            <!-- arms -->
            <line x1="140" y1="120" x2="120" y2="100" class="figure-part"/>
            <line x1="140" y1="120" x2="160" y2="100" class="figure-part"/>

            <!-- legs -->
            <line x1="140" y1="150" x2="120" y2="160" class="figure-part"/>
            <line x1="140" y1="150" x2="160" y2="160" class="figure-part"/>
        </svg>
    </div>

    <script src="script3.js"></script>
</body>
</html>

CSS

.figure-container {
    stroke: blue;
    stroke-width: 4px;
    stroke-linecap: round;
}

/* unneeded but oh well
.figure-part {
    stroke: blue;
    stroke-width: 4px;
}
*/

const words = ['application', 'programming', 'interface', 'wizard'];
const correctLetters = [];
const wrongLetters = [];

// we need to have a random word in context (from words array)
// as soon as (everytime) we load the page, get a selected word
// Math.floor makes it a whole number
// Math.random normally outputs a decimal between 0 and 1
// Multiply this by the length to get indices
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

// wire up a "keydown" letter press
window.addEventListener('keydown', e => {
    // don't click inside the console, but hitting a key outputs number in the console
    // make sure you're selected outside the console (65-90 is the keypress code)
    // even though keyCode is deprecated, you can still use it
    console.log(e.keyCode);
    
    // wanna make sure we're in the range of A-Z
    if(e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        // check if the letter typed exists in "selectedWord" (like contains)
        if(selectedWord.includes(letter)) {
            // push works like a stack here, has "pop" too
            correctLetters.push(letter);
        }
        else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                // To be continued
            }
        }
    }
})
