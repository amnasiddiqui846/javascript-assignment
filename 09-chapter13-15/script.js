//QUESTION NO 1

// let studentname = []
// studentname.push("Amna")
// studentname.push("Siddiqui")
// document.write("The array name is ",studentname)

//QUESTION NO 2 same as question 1

//QUESTION NO 3

// let name = ["Amna","Sidduiqi"] //decalre and intialize
// document.write(name)

//QUESTION NO 4

// let numbers = [10,13,14]
// document.write(numbers)

//QUESTION NO 5

// let boolean = ["true","false"]
// document.write(boolean[0])

//QUESTION NO 6

// let mixed = ["Amna",10,true,"Sidduiqi",12,false]
// document.write(mixed[0]) // ya jo 0 ha ya index ha yani 0,1,2,3 ya sab index ma ata ha 

//QUESTION NO 7

// let eduction = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"]
// document.write("1. ",eduction[0] , "<br>")
// document.write("2. ",eduction[1] , "<br>")
// document.write("3. ",eduction[2] , "<br>")
// document.write("4. ",eduction[3] , "<br>")
// document.write("5. ",eduction[4] , "<br>")
// document.write("6. ",eduction[5] , "<br>")
// document.write("7. ",eduction[6])

//QUESTION NO 8

// let stud = ["Amna","Kinza","Areeba"]
// let score = [400,320,350]
// let totalscore = 500;
// let percentage = score[0]*100/totalscore;
// let percentage1 = score[1]*100/totalscore;
// let percentage2 = score[2]*100/totalscore;

// document.write("Score of ",stud[0] , " is " , score[0] , " and percentage is : " , percentage , "<br>")
// document.write("Score of ",stud[1] , " is " , score[1] , " and percentage is : " , percentage1 , "<br>")
// document.write("Score of ",stud[2] , " is " , score[2] , " and percentage is : " , percentage2 , "<br>")

//QUESTION NO 9

//   let colors = ["Red", "Green", "Blue", "Yellow"];
//   document.write("<h3>Initial Array:</h3>");
//   document.write(colors.join(", ") + "<br><br>");

//   // a. Add color to the beginning
//   let colorStart = prompt("Which color do you want to add to the beginning?");
//   if (colorStart) {
//     colors.unshift(colorStart); // add to beginning
//     document.write("<h3>After Adding to Beginning:</h3>");
//     document.write(colors.join(", ") + "<br><br>");
//   }

//   // b. Add color to the end
//   let colorEnd = prompt("Which color do you want to add to the end?");
//   if (colorEnd) {
//     colors.push(colorEnd); // add to end
//     document.write("<h3>After Adding to End:</h3>");
//     document.write(colors.join(", ") + "<br><br>");
//   }

//   // c. Add two more colors to the beginning
//   colors.unshift("Purple", "Orange");
//   document.write("<h3>After Adding Two Colors to Beginning:</h3>");
//   document.write(colors.join(", ") + "<br><br>");

//   // d. Delete the first color
//   colors.shift();
//   document.write("<h3>After Deleting First Color:</h3>");
//   document.write(colors.join(", ") + "<br><br>");

//   // e. Delete the last color
//   colors.pop();
//   document.write("<h3>After Deleting Last Color:</h3>");
//   document.write(colors.join(", ") + "<br><br>");

//   // f. Add color at a specific index
//   let indexAdd = parseInt(prompt("At which index do you want to add a color?"));
//   let colorAdd = prompt("Which color do you want to add at index " + indexAdd + "?");
//   if (!isNaN(indexAdd) && colorAdd) {
//     colors.splice(indexAdd, 0, colorAdd); // 0 means no deletion, just insert
//     document.write("<h3>After Adding Color at Index " + indexAdd + ":</h3>");
//     document.write(colors.join(", ") + "<br><br>");
//   }

//   // g. Delete color(s) at a specific index
//   let indexDel = parseInt(prompt("At which index do you want to delete color(s)?"));
//   let countDel = parseInt(prompt("How many color(s) do you want to delete?"));
//   if (!isNaN(indexDel) && !isNaN(countDel)) {
//     colors.splice(indexDel, countDel); // delete 'countDel' items starting at 'indexDel'
//     document.write("<h3>After Deleting " + countDel + " Color(s) from Index " + indexDel + ":</h3>");
//     document.write(colors.join(", ") + "<br><br>");
//   }

//QUESTION NO 10

// let user =[320,250,120,400,420]
// user.sort()
// document.write("The sort array is : ", user)

//QUESTION NO 11

// let cityname = ["lahore" , "karachi" , "islamabad" ,"quetta"]
// let selectedcities = cityname.slice(2,4)
// document.write(selectedcities)

//QUESTION NO 12

// var arr = ["This","Is","My","Cat"]
// document.write(arr) 
// document.write(...arr)

//QUESTION NO 13

// let arr = []
// arr.push("Keyboard")
// arr.push("Mouse")
// arr.push("Printer")
// arr.push("Monitor")
// document.write (arr + "<br>")
// let first = arr.shift()
// document.write(first + "<br>")
// let second = arr.shift(1)
// document.write(second)