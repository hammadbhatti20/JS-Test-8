//Chapter No:31-34

//Q1
// var myDate = new Date();
// document.write(myDate);

//Q2
// // Get the current date
// var currentDate = new Date();

// // Array of month names
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// // Get the current month index (0-based)
// var currentMonthIndex = currentDate.getMonth();

// // Get the month name using the current month index
// var currentMonthName = months[currentMonthIndex];

// // Alert the current month name
// alert("Current month: " + currentMonthName);

//Q3
// // Get the current day
// var currentDay = new Date();

// // Array of Days names
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// // Get the current Day index (0-based)
// var currentDayIndex = currentDay.getDay();

// // Get the day name using the current day index
// var currentDayName = days[currentDayIndex];

// // Alert the current month name
// alert("Today is " + currentDayName);

//Q4
// var currentDay = new Date();

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var currentDayIndex = currentDay.getDay();

// var currentDayName = days[currentDayIndex];
// if(currentDayName == days[0] || currentDayName == days[6]) {
//     alert("it's Fun day");
// }

//Q5
// // Get the current date
// var currentDate = new Date();

// // Get the current day of the month
// var currentDayOfMonth = currentDate.getDate();

// // Check if the current day is less than 16
// if (currentDayOfMonth < 16) {
//     // Display message for the first fifteen days of the month
//     alert("First fifteen days of the month");
// } else {
//     // Display message for the last days of the month
//     alert("Last days of the month");
// }

//Q6
// // Create a new Date object
// var myDate = new Date();

// // Get the current time in milliseconds since midnight, Jan. 1, 1970
// var minutesSince1970 = myDate.getTime() / (1000 * 60); // Convert milliseconds to minutes

// // Get the current time in milliseconds since midnight, Jan. 1, 1970
// var secondSince1970 = myDate.getTime() / (1000 * 60 * 60); // Convert milliseconds to seconds

// // Display the result
// console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);

// // Display the result
// console.log("Seconds since midnight, Jan. 1, 1970: " + secondSince1970);

//Q7
// // Get the current date
// var currentDate = new Date();

// // Get the current day of the month
// var currentHour = currentDate.getHours();
// console.log(currentHour);
// // Check if the current hour is less than 12
// if (currentHour < 12) {
//     // Display message
//     alert("it's PM");
// } else {
//     // Display message
//     alert("it's AM");
// }

//Q8
// // Create a new Date object for the last day of December 2020
// let lastDay2020 = new Date(2020, 12, 0);

// // Assign it to the variable named laterDate
// let laterDate = lastDay2020;

// // Print the assigned date
// console.log("Later date:", laterDate);

//Q9
// // Create a Date object for the starting date of Ramadan (June 18, 2015)
// let ramadanStartDate = new Date(2015, 6, 18); // Months are 0-indexed, so 5 represents June

// // Create a Date object for the current date
// let currentDate = new Date();

// // Calculate the difference in milliseconds between the current date and the start of Ramadan
// let timeDifference = currentDate.getTime() - ramadanStartDate.getTime();

// // Convert the time difference from milliseconds to days
// let daysPastSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// // Alert the number of days past since 1st Ramadan
// alert(`${daysPastSinceRamadan} days have passed since 1st Ramadan, 2015`);

//Q10
// // Reference date
// let referenceDate = new Date(); // This will take the current date and time

// // Beginning of 2015
// let beginningOf2015 = new Date(2015, 0, 1); // Months are 0-indexed, so 0 represents January

// // Calculate the difference in milliseconds between the reference date and the beginning of 2015
// let timeDifference = referenceDate.getTime() - beginningOf2015.getTime();

// // Convert the time difference from milliseconds to seconds
// let secondsElapsed = Math.floor(timeDifference / 1000);

// // Display the number of seconds elapsed since the beginning of 2015
// document.write(`on reference date ${new Date(2015, 12, 5)} ${secondsElapsed} seconds had passed since beginning of 2015`);

//Q11
// // Create a Date object for the current date and time
// let currentDate = new Date();

// // Extract the hours from the current date
// let currentHours = currentDate.getHours();

// // Reset the date object an hour ahead
// currentDate.setHours(currentHours + 1);

// // Display the updated date object in the browser
// document.write("<h1>Date Object after resetting an hour ahead: " + currentDate + "</h1>");

//Q12
// var dateCurrent = new Date(2015, 12, 5);

// var dateOld = new Date(1915, 12, 5);

// document.write(`current date: ${dateCurrent} </br> 100 year back,it was ${dateOld}`);

//Q13
// // Prompt the user to enter their age
// let age = prompt("Please enter your age:");

// // Calculate birth year
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - parseInt(age);

// // Display the birth year in the browser
// document.write(`Your age is ${age} </br> Your birth year is ${birthYear}`);

//Q14
// var customerName = "ABC Customer";

// var currentMonth = "February";

// var numberOfUnits = 410;

// var chargesPerUnit = 16;

// var latePaySur = 350;

// document.write(`<h1>K-Electric Bill</h1> </br> Customer Name: ${customerName} </br> Month: ${currentMonth} </br> Number of units: ${numberOfUnits} </br> Charges per unit: ${chargesPerUnit} </br> </br> Net Amount Payable (within Due Date): ${numberOfUnits * chargesPerUnit} </br> Late Payment Surcharge: ${latePaySur} </br> Gross Amount Payable (after Due Date): ${6560 + 350}`);