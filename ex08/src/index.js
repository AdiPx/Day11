// Only change code below this line
function myMutation(arr){
    let firstElement = arr[0];
    let secondElement = arr[1];
    for (let i = 0; i < secondElement.length; i += 1) {
        let letter = secondElement [i];
        if (firstElement.indexOf(letter) === -1) {
        return false;
        }  
    }
    return true;
}
// Only change code above this line

console.log(myMutation(["hello", "hey"])); // Change line
module.exports = myMutation;