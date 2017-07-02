// https://developer.mozilla.org/en-US/docs/Web/Events

//The events we care about counting are in 
//table > tbody > tr > td > code > a

//My attempt that I gave up on after a bit:
//.
// var events = Array.prototype.slice.call(document.querySelectorAll("table tbody tr td:nth-of-type(1) a:nth-of-type(1)"));
// var extra_events = document.querySelectorAll("h3 + p a");

// for(var i=0; i<extra_events.length; i++) {
//   if(extra_events[i].href.indexOf("en-US/docs/Web/Events")) {
//     events.push(extra_events[i]);
//     console.log(events.length);
//   }
// }

// for(var i=0; i<events.length; i++) {
//   console.log(events[i].text);
// }

// function not_in_array(arr, item) {
//   for(var i=0; i<arr.length; i++) {
//     if(arr[i] === item) {
//       return false;
//     }
//   }
//   return true;
// }
//.

//recommended solution
console.log(document.querySelectorAll("tr").length - document.querySelectorAll("table").length);