var lis = document.querySelectorAll("li");

//mouseover is the event for which the mouse hover over an
//element begins
for(var i=0; i<lis.length; i++) {
  lis[i].addEventListener("mouseover", function() {
    // this.style.color = "green";
    this.classList.add("selected");
  });

  lis[i].addEventListener("mouseout", function() {
    // this.style.color = "black";
    this.classList.remove("selected");
  });
  lis[i].addEventListener("click", function() {
    this.classList.toggle("done");
  });
}

