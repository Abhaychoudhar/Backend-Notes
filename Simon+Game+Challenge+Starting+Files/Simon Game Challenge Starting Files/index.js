let userSequence = [];
let gameSequence = [];
let level = 0;

// Function to apply sound and animation to a button
function areArraysEqual(arr1, arr2) {
    // Check if lengths are different
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Check each element in the arrays
    return arr1.every((value, index) => value === arr2[index]);
}
function applySound(color, url) {
    $("#" + color).click(function (e) {
        const sound = new Audio(url);
        sound.play();
        $("#" + color).addClass("pressed");
        setTimeout(function () {
            $("#" + color).removeClass("pressed");
        }, 80);
        // Check the user's inpu
        console.log(level);
        userSequence.push(e.id);
       if( userSequence.length == level) {
           checkUserInput(userSequence);
    }
    });
}

// Function to check the user's input
function checkUserInput(currentIndex) {
    if ( areArraysEqual(userSequence, gameSequence) ) {
        // Wrong sequence, game over
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playGameOverSound();
        startOver();
    } else  {
        // User completed the sequence
        setTimeout(nextSequence, 100);
    }
}

// Function to generate the next sequence
function nextSequence() {
    userSequence = [];
    level++;
    $("#level-title").text("Level " + level);

    const colors = ["red", "blue", "yellow", "green"];
    const randomColor = colors[Math.floor(Math.random() * 4)];
    gameSequence.push(randomColor);

    // Play the sound and animate the button for the random color
    const sound = new Audio(`./sounds/${randomColor}.mp3`);
    sound.play();
    $("#" + randomColor).addClass("pressed");
    setTimeout(() => $("#" + randomColor).removeClass("pressed"), 50);
}

// Function to play game-over sound
function playGameOverSound() {
    const sound = new Audio("./sounds/wrong.mp3");
    sound.play();
}

// Function to reset the game
function startOver() {
    level = 0;
    gameSequence = [];
    userSequence = [];
}

$(document).keydown(function () {
    if (level === 0) {
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});


applySound("red", "./sounds/red.mp3");
applySound("blue", "./sounds/blue.mp3");
applySound("yellow", "./sounds/yellow.mp3");
applySound("green", "./sounds/green.mp3");
