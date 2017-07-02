//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");
guess = Number(guess);

//check if guess is right
if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
//check if higher
else if(guess > secretNumber) {
  alert("Too high, try again");
}
//otherwise is lower
else {
  alert("Too low, try again");
}