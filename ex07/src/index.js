// Only change code below this line
function largestNumFromArr(arr) {
  var maxNumArray = [];
  for (var i = 0; i < maxNumArray.length; i += 1) {
    var largestNum = maxNumArray[i];
    var individualHighest = -Infinity;
    for (var j = 0; j < largestNum.length; j += 1){
        if (individualHighest < largestNum[j]); {
            individualHighest = largestNum [j];
        }
    }
    result.push(individualHighest);
  }
  return result;
}
// Only change code above this line

console.log(
  largestNumFromArr([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // Change this line
module.exports = largestNumFromArr;
