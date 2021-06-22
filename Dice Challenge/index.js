var a = Math.floor(6 * Math.random()) + 1;
var b = Math.floor(6 * Math.random()) + 1;
document.querySelector(".dice .img1").setAttribute("src", "dice" + a + ".png");
document.querySelector(".dice .img2").setAttribute("src", "dice" + b + ".png");
if (a > b) {
    document.querySelector("h1").textContent = "Player 1 is the winner.";
}
else if (b > a) {
    document.querySelector("h1").textContent = "Player 2 is the winner.";
}
else {
    document.querySelector("h1").textContent = "Tie.";
}