//question 1
// Write a function that displays current date & time in your browser.

// function displayDateTime() {
//     var currentDateTime = new Date();
//     document.write("Current Date and Time: " + currentDateTime);
// }
// displayDateTime();

// question 2
// Write a function that takes first & last name and then it greets the user using his full name.

// function GreetUser(){
//      var firstName= prompt("write your first name");
//      var lastname = prompt("write your last name");
//      document.write("hello" + " " + firstName + " " + lastname);
// }
// GreetUser();

// question 3
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function AddtwoNumbers(){
//     var num1=+prompt("enter num1")
//     var num2=+prompt("enter num2")
//     var result= num1+num2;
//      document.write("your result is" + " " +result);
// }
// AddtwoNumbers();

// question 4
// calculator
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator(num1, num2, operator) {
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "*") {
//         return num1 * num2;
//     } else if (operator === "/") {
//         return num1 / num2;
//     } else {
//         return "Invalid operator";
//     }
// }
// var number1 = +prompt("Enter first number:");
// var number2 = +prompt("Enter second number:");
// var operator = prompt("Enter operator (+, -, *, /):");
// var result = calculator(number1, number2, operator);
// document.write("Result: " + result);

// question 5
// Write a function that squares its argument.
//  function square(num) {
//     return num * num;
//  }
//     var number = +prompt("Enter a number to square:");
//     var result = square(number);
//     document.write("The square of " + number + " is: " + result);

// question 6
// Write a function that computes factorial of a number.
// function factorial(n) {
//     var result = 1;

//     for (var i = 1; i <= n; i++) {
//         result *= i;
//     }

//     document.write("The factorial of " + n + " is: " + result);
// }

// var number = +prompt("Enter a number to compute factorial:");
// factorial(number);


// question 6

// Write a function that take start and end number as inputs & display counting in your browser.
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
        
//         document.write(i + "<br>");
//     }
// }
// var startNumber = +prompt("Enter the starting number:");
// var endNumber = +prompt("Enter the ending number:");
// counting(startNumber, endNumber);

// question 7
// Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.Outer function : calculateHypotenuse()Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
    
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
    
//     return hypotenuse;
// }
// var base = +prompt("Enter the base of the triangle:");
// var perpendicular = +prompt("Enter the perpendicular of the triangle:");
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// document.write("The hypotenuse of the triangle is: " + hypotenuse);


// question 8
// Write a function that calculates the area of a rectangle.A = width * heightPass width and height in following manner:i. Arguments as valueii. Arguments as variables

// function calculateArea(width, height) {
//     return width * height;
// }

// /* 1. Arguments as values */
// var area1 = calculateArea(5, 10);
// document.write("Using arguments as values: " + area1 + "<br><br>");

// /* 2. Arguments as variables (user input) */
// var width = +prompt("Enter width:");
// var height = +prompt("Enter height:");

// var area2 = calculateArea(width, height);
// document.write("Using user input values: " + area2);


// question 9
// Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function isPalindrome(str) {
//     var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     var reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }
// var inputString = prompt("Enter a string to check if it's a palindrome:");
// if (isPalindrome(inputString)) {
//     document.write("The string '" + inputString + "' is a palindrome.");

// } else {
//     document.write("The string '" + inputString + "' is not a palindrome.");
// }

// question 10
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function toTitleCase(str) { 
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];
//         words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }
//     return words.join(' ');
// }
// var inputString = prompt("Enter a string to convert to title case:");
// var titleCaseString = toTitleCase(inputString);
// document.write("Title Case: " + titleCaseString);

// question 11
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }       
// var inputString = prompt("Enter a string to find the longest word:");
// var longestWord = findLongestWord(inputString);
// document.write("The longest word in the string is: " + longestWord);


// question 12
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// var inputString = prompt("Enter a string:");
// var inputLetter = prompt("Enter a letter to count:");
// var occurrences = countOccurrences(inputString, inputLetter);
// document.write("The letter '" + inputLetter + "' occurs " + occurrences + " times in the string.");

// question 13
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is NN" + " "+ circumference.toFixed(2) + "<br><br>");
// }   
// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is NN" + " "+ area.toFixed(2));
// }
// var radius = +prompt("Enter the radius of the circle:");
// calcCircumference(radius);
// calcArea(radius);



