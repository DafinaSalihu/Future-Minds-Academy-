/*
Author:Dafina Salihu
Date: Jan 4, 2024

Titke: Guess a number between 1 - 10 
tries:3

results:"Contgrats" Or "You Lost"
*/

let guessNumber= parseInt(prompt("Guess a number between 1 - 10"));
let guess = Math.floor(Math.random()* 10 + 1);

console.log("The computer guessed " + guess);

if(guessNumber == guess){
    console.log("CONGRATS");
}
else{
if(guessNumber > guess){
    guessNumber= parseInt(prompt("Guess lower"));
}

else if(guessNumber < guess){
    guessNumber= parseInt(prompt("Guess higher"));
}
else{

}
}