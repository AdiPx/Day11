// Create a monitorsListArray here
var monitorsListArray = ["Apple", "Peach", "Berry"];
newMonitorsList = monitorsListArray;
// End of monitorsListArray here

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  // Only change code below this line
  var monitorsList = [];
  for (var i = 0; i < newMonitorsList.length; i++) {
    if ((newMonitorsListArray[i] = "Apple"));
    monitorsList = [monitorsListArray[0], i + 1];
  }

  return newMonitorsList;
  // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports = myMonitorsFunction;
