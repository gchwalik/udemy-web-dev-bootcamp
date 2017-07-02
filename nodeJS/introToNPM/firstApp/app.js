// npm install cat-me
// npm install knock-knock-jokes
// npm install <package> --save
// --save will automatically save this package name into our package.json file

var cat = require("cat-me");
var joke = require("knock-knock-jokes");

console.log(cat());
console.log(joke());