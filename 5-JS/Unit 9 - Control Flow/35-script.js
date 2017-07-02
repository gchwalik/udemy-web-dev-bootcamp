//While Loops Problem Set

//1. Print all numbers between -10 and 19
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
for(var i=-10; i<20; i++) {
  console.log(i);
}

//2. Print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
for(var i=10; i<41; i+=2) {
  console.log(i);
}

//3. Print all odd numbers between 300 and 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
for(var i=300; i<334; i++) {
  if(i % 2 === 1) {
    console.log(i);
  }  
}

//4.Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for(var i=5; i<=50; i++) {
  if(i%5 === 0 && i%3 === 0) {
    console.log(i);
  }  
}
