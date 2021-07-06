let icon = document.querySelector(".hamburger");
let close = document.querySelector(".hamburger-close");
let navLinks = document.querySelector(".navbar");
let connect = document.querySelector(".connect");
let navStyle = navLinks.style;
let iconStyle = icon.style;
let closeStyle = close.style;


icon.addEventListener("click", function() {
    if (navStyle.display === "block") {
        navStyle.display = "none";
        iconStyle.display = "none";
        closeStyle.display = "block";
    }
    else {

        navStyle.display = "block";
        iconStyle.display = "none";
        closeStyle.display = "block";
        close.addEventListener("click", function() {
            if (navStyle.display === "block") {
                navStyle.display = "none";
                closeStyle.display = "none";
                iconStyle.display = "block";
            }
        });
    }
});