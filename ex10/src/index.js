// Only change code below this line
function mySplice(arr1, arr2, n) {
let result = [];
result.push(...arr2.slice(0, n))
}
// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1)); // Change this line
module.exports = mySplice;