var numButtons = document.querySelectorAll("button.drum").length;

for (var a = 1; a <= numButtons; a++) {

    document.querySelectorAll("button.drum")[a - 1].addEventListener("click", function () {
        playSound(this.innerText);
        buttonAnimation(this.innerText);
    });
}
function playSound(a) {
        
    switch (a) {
        case 'w':
            var x = new Audio("sounds/tom-1.mp3")
            x.play();
            break;
        case 'a':
            var x = new Audio("sounds/tom-2.mp3")
            x.play();
            break;
        case 's':
            var x = new Audio("sounds/tom-3.mp3")
            x.play();
            break;
        case 'd':
            var x = new Audio("sounds/tom-4.mp3")
            x.play();
            break;
        case 'j':
            var x = new Audio("sounds/crash.mp3")
            x.play();
            break;
        case 'k':
            var x = new Audio("sounds/kick-bass.mp3")
            x.play();
            break;
        case 'l':
            var x = new Audio("sounds/snare.mp3")
            x.play();
            break;
        default:
            console.log(a);
            break;
    }
}
document.addEventListener("keypress", function (evt) {
    playSound(evt.key);
    buttonAnimation(evt.key);
})
function buttonAnimation(a) {
    var x = document.querySelector("." + a);
    x.classList.add("pressed");
    setTimeout(function () {
        
        x.classList.remove("pressed");
    }, 100);
}