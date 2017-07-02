// NODE EXERCISE

// Using the command line, create a file "echo.js"
// Inside the file, write a function named echo that takes 2 arguments: 
// - a string, and 
// - a number
// It should prints our the string, number number of times

function echo(str, num) {
    for(var i=0; i<num; i++) {
        console.log(i + str);
    }
}

echo("a", 10);    //should print "a" 10 times
echo("b", 3);     //should print "b" 3 times

//Add the above 2 examples to the end of your file
//Lastly, run the contents of "echo.js" using node