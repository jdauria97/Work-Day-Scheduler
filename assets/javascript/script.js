// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM, DD, YYYY'));

var timeNow = dayjs();
$('#present').addClass('.present');

var hourNow = dayjs().hour();

var hr9 = document.getElementById('hour-9');
var hr10 = document.getElementById('hour-10');
var hr11 = document.getElementById('hour-11');
var hr12 = document.getElementById('hour-12');
var hr13 = document.getElementById('hour-13');
var hr14 = document.getElementById('hour-14');
var hr15 = document.getElementById('hour-15');
var hr16 = document.getElementById('hour-16');
var hr17 = document.getElementById('hour-17');
hr9 = dayjs().hour(9);
hr10 = dayjs().hour(10);
hr11 = dayjs().hour(11);
hr12 = dayjs().hour(12);
hr13 = dayjs().hour(13);
hr14 = dayjs().hour(14);
hr15 = dayjs().hour(15);
hr16 = dayjs().hour(16);
hr17 = dayjs().hour(17);


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  