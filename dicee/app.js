var min= 1;
var max= 6
var randomNumber1= Math.floor(Math.random()*(max-min)+min);
var randomNumber2= Math.floor(Math.random()*(max-min)+min);

document.querySelector(".img1").setAttribute("src", "image/dice"+randomNumber1+".png")
document.querySelector(".img2").setAttribute("src", "image/dice"+randomNumber2+".png")


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
} else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
} 



















/*
var min=1
var max=6
var randomNumber1 = Math.floor(Math.random()*(max-min)+min);
var randomNumber2=Math.floor(Math.random()*(max-min)+min);

document.querySelector(".img1").setAttribute("src", "image/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "image/dice"+randomNumber2+".png");

if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🎲"
}
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🎲"
}
if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="You should try again 🎲"
}
*/


