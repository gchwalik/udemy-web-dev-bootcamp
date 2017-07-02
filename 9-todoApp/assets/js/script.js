//Check Off Specific Todos by Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "li span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$('input[type="text"]').keypress(function() {
  if(event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    //create new li and add to ul
    $("ul").append("<li>" + todoText +" <span><i class='fa fa-trash'></i></span></li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});