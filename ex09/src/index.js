// Only change code below this line
function myBouncer(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let individualValue = arr[i];
    if (individualValue) {
      result.push(arr[i]);
    }
  }
  return result;
}
// Only change code above this line

console.log(myBouncer([7, "ate", "", false, 9])); // Change this line
module.exports = myBouncer;
