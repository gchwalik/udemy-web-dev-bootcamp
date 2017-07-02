var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {

  if(input === "list") {
    listTodos();
  }
  else if(input === "new") {
    addTodo();
  }  
  else if(input === "delete") {
    deleteTodo();
  }

  input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");


function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, index) {
    console.log(index + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  //ask for new todo
  var newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  //splice(where_to_start_cut, how_many_items_to_delete)
  todos.splice(index, 1);
  console.log("Deleted Todo");
}