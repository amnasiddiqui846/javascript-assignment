// question 1
// Write a JavaScript function to show an alert box when the user clicks on a link. The alert box should display the message "Link clicked!".

// function showAlert() {
//     alert("Link clicked!");
// }

// question 2
function alertuser() {
    alert("thanks for purchasing a phone from us");
}

// question 3
// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// question 4
// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
function changeImage() {
    document.getElementById("myImage").src = "images/img2.jfif";
}

function originalImage() {
    document.getElementById("myImage").src = "images/img1.jfif";
}

// question 5
// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
var counter = 0;

function updateDisplay() {
    document.getElementById("count").innerText = counter;
}

function increase() {
    counter++;
    updateDisplay();
}

function decrease() {
    counter--;
    updateDisplay();
}