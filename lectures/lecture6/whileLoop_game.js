/*
<!DOCTYPE html>
<html lang="en">
<head>
    <title>While Loop Game</title>
    <!-- Let's begin some basic JS -->
    <script>
        // Alert makes a window pop up for the user
        //alert('Hello World!');
    </script>
</head>
<body>
    <h1>This is a while loop game!</h1>
    <p>This is a para again</p>

    <!-- link to an external JS file
        Notice that it's in the body (put it at the bottom of all your content)
        If we put it at the top, if the script crashes, the other things don't load -->
    <script src="script2.js"></script>
</body>
</html>
*/

/* while loop as a game loop - guessing game
    if player guesses the game, they win
    if not, continue to play */
let userGuess = 0;
let correctNumber = 3;  // this is the correct answer

// continue running while the condition is true
while (userGuess != correctNumber) {
    // introduce you to a JS built-in function
    // I want to prompt the user to input the number
    // Opens up a prompt window every time you reload the page
    userGuess = prompt('Guess a number between 1 and 5');

    if(userGuess == correctNumber) {
        alert('Congrats, you won!');
    }
    else {
        alert('Incorrect guess, please try again...');
    }
}
