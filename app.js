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


//Chapter No: 35-38

//Q1
// function dateTime() {
//     var time = new Date();
//     console.log(time);
// }

// dateTime();

//Q2
// // Define a function that greets the user using their full name
// function greetUser(firstName, lastName) {
//     // Concatenate the first and last names to form the full name
//     var fullName = firstName + ' ' + lastName;
    
//     // Greet the user using their full name
//     alert('Hello, ' + fullName + '! Welcome.');
// }

// // Test the function
// greetUser(prompt("first name"), prompt("last name"));

//Q3
// // Define a function to add two numbers input by the user
// function addNumbers() {
//     // Prompt the user to input the first number and convert it to a float
//     var num1 = parseFloat(prompt("Enter the first number:"));

//     // Prompt the user to input the second number and convert it to a float
//     var num2 = parseFloat(prompt("Enter the second number:"));

//     // Add the two numbers together
//     var sum = num1 + num2;

//     // Return the sum
//     return sum;
// }

// // Call the function and store the result
// var result = addNumbers();

// // Display the result
// alert("The sum of the two numbers is: " + result);

//Q4
// // Define a function to perform arithmetic operations based on operator
// function calculate(num1, num2, operator) {
//     var result;

//     // Perform the operation based on the operator provided
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             // Check if dividing by zero
//             if (num2 === 0) {
//                 result = "Cannot divide by zero!";
//             } else {
//                 result = num1 / num2;
//             }
//             break;
//         default:
//             result = "Invalid operator!";
//     }

//     // Show the result in the browser
//     document.write("The result of " + num1 + " " + operator + " " + num2 + " is: " + result);
// }

// // Test the function
// calculate(+prompt("enter value1"), +prompt("enter value2"), prompt("enter operator"));

//Q5
// // Define a function to square its argument
// function square(number) {
//     return number * number;
// }

// // Test the function
// var result = square(5); // Calling the function with argument 5
// console.log("The square of 5 is: " + result); // Output: The square of 5 is: 25

//Q6
// // Define a function to compute the factorial of a number
// function factorial(number) {
//     // Base case: If the number is 0 or 1, return 1 (factorial of 0 and 1 is 1)
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         // Recursive case: Compute factorial recursively by multiplying the number with factorial of (number - 1)
//         return number * factorial(number - 1);
//     }
// }

// // Test the function
// var num = 5;
// var result = factorial(num);
// console.log("The factorial of " + num + " is: " + result); // Output: The factorial of 5 is: 120

//Q7
// function count(start, end) {
//     for(i = start; i <= end; i++) {
//         document.write(i, "</br>");
//     }
// }

// count(1, 10);

//Q8
// // Define an outer function to calculate the hypotenuse
// function calculateHypotenuse(base, perpendicular) {
//     // Define an inner function to calculate the square of a number
//     function calculateSquare(number) {
//         return number * number;
//     }

//     // Calculate the squares of base and perpendicular using the inner function
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     // Calculate the sum of squares
//     var sumOfSquares = baseSquare + perpendicularSquare;

//     // Calculate the square root of the sum of squares to get the hypotenuse
//     var hypotenuse = Math.sqrt(sumOfSquares);

//     // Return the hypotenuse
//     return hypotenuse;
// }

// // Test the function
// var base = 3;
// var perpendicular = 4;
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// console.log("The hypotenuse of the right triangle with base " + base + " and perpendicular " + perpendicular + " is: " + hypotenuse);

//Q9
// function area(width, height) {
//     var rectangle = width * height;
//     return rectangle;
// }

// var result = area(5, 6);
// alert(result);

//Q10
// var word = prompt("enter your words");
// var update = "";

// for(var i = word.length; i >= 0; i--) {
//     update += word[i];
// }

// if(word === update) {
//     console.log("it is a plaindrome word..");
// } else {
//     console.log("it is not a plaindrome word..");
// }

//Q11
// // Define a function to capitalize the first letter of each word
// function capitalizeFirstLetter(str) {
//     // Split the string into an array of words
//     var words = str.split(' ');

//     // Iterate through each word
//     for (var i = 0; i < words.length; i++) {
//         // Capitalize the first letter of each word
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     // Join the words back into a single string
//     var capitalizedString = words.join(' ');

//     // Return the capitalized string
//     return capitalizedString;
// }

// // Test the function
// var inputString = 'the quick brown fox';
// var outputString = capitalizeFirstLetter(inputString);
// console.log("Input String: " + inputString);
// console.log("Output String: " + outputString);

//Q12
// // Define a function to find the longest word in a string
// function findLongestWord(str) {
//     // Split the string into an array of words
//     var words = str.split(' ');

//     // Initialize variables to store the longest word and its length
//     var longestWord = '';
//     var maxLength = 0;

//     // Iterate through each word
//     for (var i = 0; i < words.length; i++) {
//         // Check if the current word is longer than the previous longest word
//         if (words[i].length > maxLength) {
//             // Update the longest word and its length
//             longestWord = words[i];
//             maxLength = words[i].length;
//         }
//     }

//     // Return the longest word
//     return longestWord;
// }

// // Test the function
// var inputString = 'Web Development Tutorial';
// var longestWord = findLongestWord(inputString);
// console.log("Input String: " + inputString);
// console.log("Longest Word: " + longestWord);

//Q13
// // Define a function to count the occurrences of a letter in a string
// function countOccurrences(str, letter) {
//     // Initialize a variable to store the count of occurrences
//     var count = 0;

//     // Iterate through each character of the string
//     for (var i = 0; i < str.length; i++) {
//         // Check if the current character is equal to the specified letter
//         if (str.charAt(i) === letter) {
//             // If so, increment the count
//             count++;
//         }
//     }

//     // Return the count of occurrences
//     return count;
// }

// // Test the function
// var inputString = 'JSResourceS.com';
// var letterToCount = 'o';
// var occurrences = countOccurrences(inputString, letterToCount);
// console.log("Occurrences of letter '" + letterToCount + "' in string '" + inputString + "': " + occurrences);

//Q14
// // Define a function to calculate the circumference of a circle
// function calcCircumference(radius) {
//     // Calculate the circumference using the formula: 2 * π * radius
//     var circumference = 2 * Math.PI * radius;
    
//     // Output the circumference
//     console.log("The circumference is " + circumference.toFixed(2));
// }

// // Define a function to calculate the area of a circle
// function calcArea(radius) {
//     // Calculate the area using the formula: π * radius^2
//     var area = Math.PI * Math.pow(radius, 2);
    
//     // Output the area
//     console.log("The area is " + area.toFixed(2));
// }

// // Test the functions
// var radius = 5;
// calcCircumference(radius); // Output: The circumference is 31.42
// calcArea(radius); // Output: The area is 78.54
