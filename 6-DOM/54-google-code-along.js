//First inspect the Google logo for the day to make sure its an img

//Find its id; at the time of writing, it has an id of "hplogo"
//Retrieve
var logo = document.querySelector("#hplogo");

//Change the logo to a cute kitten image
//This does throw an error though, because the image isn't hosted on 
//a secure website (needs https)
logo.setAttribute("srcset", "http://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg");

//Using instead
logo.setAttribute("srcset", "https://www.sublimetext.com/blog/images/build_error.png");
logo.style.width = "600px";
logo.style.height = "300px";

logo.style.border = "2px solid purple";

var links = document.getElementsByTagName("a");

//because not an array, can't use forEach
for(var i=0; i<links.length; i++) {
  console.log(links[i].textContent);
}

for(var i=0; i<links.length; i++) {
  links[i].style.background = "pink";
  links[i].style.border = "1px dashed purple";
  links[i].style.color = "orange";

  links[i].setAttribute("href", "http://www.bing.com");
}

