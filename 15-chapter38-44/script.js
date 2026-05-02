// question 1
// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
// function power(a, b) {
//     return Math.pow(a, b);
// }
// var base = +prompt("Enter the base number:");
// var exponent = +prompt("Enter the exponent number:");
// var result = power(base, exponent);
// document.write(base + " raised to the power of " + exponent + " is: " + result);

// question 2
// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {   
//         return true;
//     } else {
//         return false;
//     }
// }
// var year = +prompt("Enter a year to check if it's a leap year:");
// if (isLeapYear(year)) {
//     document.write(year + " is a leap year.");
// } else {
//     document.write(year + " is not a leap year.");
// }


// question 3
// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function calculateArea(a, b, c) {
//     function calculateS(a, b, c) {
//         return (a + b + c) / 2;
//     }  
//     var S = calculateS(a, b, c);
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }
// var sideA = +prompt("Enter the length of side a:");
// var sideB = +prompt("Enter the length of side b:");
// var sideC = +prompt("Enter the length of side c:");
// var triangleArea = calculateArea(sideA, sideB, sideC);
// document.write("The area of the triangle is: " + triangleArea);     

// question 4
// Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage.

// function calculateResults(mark1, mark2, mark3) {
//     function calculateAverage(mark1, mark2, mark3) {
//         return (mark1 + mark2 + mark3) / 3;
//     }
//     function calculatePercentage(mark1, mark2, mark3) {
//         var totalMarks = mark1 + mark2 + mark3 ;
//         var percentage = (totalMarks / 300) * 100;
//         return percentage;
//     }
//     var average = calculateAverage(mark1, mark2, mark3);
//     var percentage = calculatePercentage(mark1, mark2, mark3);
//     return {
//         average: average,
//         percentage: percentage
//     };
// }

// var results = calculateResults(40, 59, 60);
// document.write("Average Marks: " + results.average.toFixed(2) + "<br>");
// document.write("Percentage: " + results.percentage.toFixed(2) + "%");

// question 5
// You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) return i;
//     }
//     return -1;
// }
// var inputString = prompt("Enter a string:");
// var characterToFind = prompt("Enter a character to find its index:");
// var index = customIndexOf(inputString, characterToFind);
// if (index !== -1) {
//     document.write("The index of '" + characterToFind + "' in the string is: " + index);
// } else {
//     document.write("Character '" + characterToFind + "' not found in the string.");
// }


// question 6
// Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
// function deleteVowels(str) {
//     var vowels = "aeiouAEIOU";
//     var result = "";

//     for (var i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// var inputString = prompt("Enter a sentence (max 25 characters):");

// if (inputString.length > 25) {
//     document.write("Please enter a sentence not more than 25 characters.");
// } else {
//     document.write("Original Text: " + inputString + "<br>");

//     var noVowels = deleteVowels(inputString);
//     document.write("Without Vowels: " + noVowels);
// }

// question 7
// Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” such occurrences are ea, ea, ui.

// function countVowelPairs(str) {
//     var vowels = "aeiouAEIOU";
//     var count = 0; 
//     for (var i = 0; i < str.length - 1; i++) {
//         var pair = str[i] + str[i + 1];
//         switch (pair) {
//             case "aa":
//             case "ee":
//             case "ii":
//             case "oo":
//             case "uu":
//             case "AA":
//             case "EE":
//             case "II":
//             case "OO":
//             case "UU":
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }
// var inputString = prompt("Enter a line of text:");
// var vowelPairCount = countVowelPairs(inputString);
// document.write("Original Text: " + inputString + "<br><br>");
// document.write("Number of occurrences of two vowels in succession: " + vowelPairCount); 

// question 8
// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function convertDistance(km) {
//     function toMeters(km) {
//         return km * 1000; 
//     }
//     function toFeet(km) {
//         return km * 3280.84; 
//     }  
//     function toInches(km) {
//         return km * 39370.1; 
//     }
//     function toCentimeters(km) {
//         return km * 100000;
//     }
//     return {
//         meters: toMeters(km),
//         feet: toFeet(km),
//         inches: toInches(km),
//         centimeters: toCentimeters(km)
//     };
        
// }
// var distanceKm = +prompt("Enter the distance between two cities in kilometers:");
// var convertedDistances = convertDistance(distanceKm);
// document.write("Distance in Kilometers: " + distanceKm + " km<br>");    
// document.write("Distance in Meters: " + convertedDistances.meters + " m<br>");
// document.write("Distance in Feet: " + convertedDistances.feet + " ft<br>");
// document.write("Distance in Inches: " + convertedDistances.inches + " in<br>");
// document.write("Distance in Centimeters: " + convertedDistances.centimeters + " cm<br>");


// question 9
// Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hourworked above 40 hours. Assume that employees do not work for fractional part of an hour.

// function calculateOvertimePay(hoursWorked) {
//     if (hoursWorked > 40) {
//         var overtimeHours = hoursWorked - 40;
//         return overtimeHours * 12.00;
//     }
//     return 0;
// }
// var hours = +prompt("Enter the number of hours worked by the employee:");
// var overtimePay = calculateOvertimePay(hours); 
// if (overtimePay > 0) {
//     document.write("Employee worked " + hours + " hours.<br><br>");
//     document.write("Overtime Pay: Rs. " + overtimePay.toFixed(2));
// } else {
//     document.write("No overtime pay. Employee worked " + hours + " hours.");
// }

// question 10
// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through thekeyboard in hundreds, find the total number of currency notesof each denomination the cashier will have to give to thewithdrawer.


// function calculateCurrencyNotes(amount) {
//     var hundreds = Math.floor(amount / 100);
//     var remainingAmount = amount % 100;
//     var fifties = Math.floor(remainingAmount / 50);
//     remainingAmount = remainingAmount % 50;
//     var tens = Math.floor(remainingAmount / 10);
//     return {
//         hundreds: hundreds,
//         fifties: fifties,
//         tens: tens
//     };
// }  
// var amountToWithdraw = +prompt("Enter the amount to withdraw (in hundreds):");
// var notes = calculateCurrencyNotes(amountToWithdraw);
// document.write("Amount to Withdraw: Rs. " + amountToWithdraw + "<br><br>");
// document.write("Hundred Notes: " + notes.hundreds + "<br>");
// document.write("Fifty Notes: " + notes.fifties + "<br>");
// document.write("Ten Notes: " + notes.tens + "<br>");

