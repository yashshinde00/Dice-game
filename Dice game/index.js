var number = Math.floor(Math.random() * 6) + 1;
var randomDiceimage = "dice" + number + ".png";
var randomimage = "images/" + randomDiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage);

var number2 = Math.floor(Math.random() * 6) + 1;
var randomDiceimage2 = "dice" + number2 + ".png";
var randomimage2 = "images/" + randomDiceimage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2);

if (number > number2) {
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
} else if (number < number2) {
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
} else {
  document.querySelector("h1").innerHTML="Draw !!its a draw buddy!! ";
}
