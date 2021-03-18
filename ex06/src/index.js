// Only change code below this line
var myArray = [];
function multiplyArrayFunction(myArray) {
  var sum = 0;
  for (var i = 0; i < myArray.length; i++) {
    sum = myArray[1] + myArray[2] + myArray[3];
  }
  return sum;
  
// Only change code above this line
console.log(multiplyArrayFunction([2], [5, 6, 7], [8, 9])); // Change this line
module.exports = multiplyArrayFunction;