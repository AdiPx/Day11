// Only change code below this line
var myNestedArray = [
  ["Toblerone", 5],
  ["Milka", 3],
];
chocolate = myNestedArray;

function myNestedFunction(arr) {
  var chocolate = [...arr];
  return chocolate;
}
// Only change code above this line
console.log(myNestedFunction(myNestedArray)); // Change this line
module.exports = myNestedFunction;
