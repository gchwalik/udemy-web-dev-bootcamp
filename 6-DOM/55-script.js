var string = document.readyState; 

console.log("hello world");

var button1 = document.getElementsByTagName("button")[0];
var button2 = document.getElementsByTagName("button")[1];
var button3 = document.getElementsByTagName("button")[2];

var paragraph = document.querySelector("p");
var h2 = document.querySelector("h2");

button1.addEventListener("click", function() {
  console.log("clicked");
});

//Setup click listener
button2.addEventListener("click", function() {
  paragraph.textContent = "Someone clicked the button";
});

//For the callback function here, don't use parentheses or
//it'll get called immediately
//Also note that the callback function is defined after 
//this event listener setup 
button3.addEventListener("click", changeH2);

function changeH2() {
  h2.style.background = "teal";
}

//We can have more than one listener on a given element
var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
  alert("h1 was clicked");
});

h1.addEventListener("click", function() {
  h1.style.background = "orange";
});

document.querySelector("ul").addEventListener("click", function() {
  console.log("clicked ul");
});

var lis = document.querySelectorAll("li");
for(var i=0; i<lis.length; i++) {
  //inside of a listener, the keyword "this" refers to the item 
  //that was clicked on, hovered over, etc
  lis[i].addEventListener("click", function() {
    this.style.color = "pink";
  });
}

