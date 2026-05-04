function showData(event) {
    event.preventDefault();

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.getElementById("output").innerHTML =
        "Name: " + firstName + " " + lastName + "<br>" +
        "Email: " + email + "<br>" +
        "Password: " + password;
}