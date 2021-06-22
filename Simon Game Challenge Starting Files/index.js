var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var patternDetect = 0;

$(".btn").click(function () {
    if (level === 0) return;
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    // console.log(userChosenColour);
    animatePress(userChosenColour);
    if (userClickedPattern[patternDetect] != gamePattern[patternDetect]) {
        level = 0;
        patternDetect = 0;
        userClickedPattern=[];
        gamePattern=[];
        $("h1").text("Game Over.Press any key to continue.");
        playSound("game-over");
        return;
    }
    patternDetect++;
    if(patternDetect===level)
    nextSequence();
});

$(document).on("keypress", function () {
    if (level > 0) return;
    nextSequence();
});

function nextSequence() {
    var x = Math.floor(Math.random() * 4);
    // console.log(x);
    patternDetect=0;
    userClickedPattern.length=0;
    var randomChosenColor = buttonColors[x];
    gamePattern.push(randomChosenColor);
    level++;
    playSound(randomChosenColor);
    $("h1").text("Level " + level);
}

function playSound(name) {
    $("#" + name).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function () {
        $("." + currentColour).toggleClass("pressed");
    },200);
}