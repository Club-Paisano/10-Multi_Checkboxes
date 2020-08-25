//jshint esversion: 6

/*
Author: Ti Tonito

This page provides a similar functionality to emails in that if you click to check/uncheck and second box while pressing the shiftKey
it will check/uncheck all the checkboxes in the middle as well

Future Development:
-Refactor code
-Add more "email-like" functionalities
-Add another grouping up top that selects/unselects all of the buttons
-Get todo tasks from api call

*/



//All checkboxes on the screen into an array so i can use array functions on them
const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
let lastChecked;


initPage = () => {
  checkboxes.forEach(checkbox => checkbox.addEventListener("click", boxChecked));


};


function boxChecked(e) {
  /*To see if were going to the check all boxes in between, make sure
    1. The shift key is pressed
    2. There is another box that was checked previously
    3. Make sure the last checked box wasn't this one
  */

  if(event.shiftKey && lastChecked && lastChecked != this) {
    //Get the indexes of the 2 Checkboxes

    const thisCheckboxIndex = checkboxes.indexOf(this);
    const lastCheckedIndex = checkboxes.indexOf(lastChecked);
    //Put them into 2 vars to hold the indexes from lowest to highest
    const [min,max ] = [Math.min(lastCheckedIndex,thisCheckboxIndex),Math.max(lastCheckedIndex,thisCheckboxIndex)];



    //Iterate through the checkboxes array from the lowest of the 2 boxes that were last clicked and copy what action was taken on the last one clicked
    for (var i = min; i <= max; i++) {
      checkboxes[i].checked = checkboxes[lastCheckedIndex].checked;
    }

  }

  lastChecked = this;

}

initPage();
