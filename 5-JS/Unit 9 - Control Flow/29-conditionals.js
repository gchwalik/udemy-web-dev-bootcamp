//JS Conditionals
//Making decisions with code

//if
//else if
//else

var age = prompt("What is your age?");

if(age < 0) {
  console.log("Please provide a positive age");
}

else if(age < 18) {
  console.log("Sorry, you are not old enough to enter the venue");
}

//else if(age > 18 && age < 21) {
//Since the "else if" only executes if the "if" fails, 
//we don't need to recheck "age > 18"

else if(age < 21) {
  console.log("You can enter, but cannot drink");
}

else if(age == 21) {
  console.log("Happy 21st birthday!!");
}

//else if((Math.sqrt(age) % 1) === 0) {
else if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}

else {
  console.log("Come on in. You can drink.");
}