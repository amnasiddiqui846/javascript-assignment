
function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("moreText");
    var btn = document.getElementById("btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerHTML = "Read Less";
    }
}