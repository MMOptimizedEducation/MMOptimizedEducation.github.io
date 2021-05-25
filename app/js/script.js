const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".fades");
const body = document.querySelector("body");


btnHamburger.addEventListener("click", function() {

    if(header.classList.contains("open")) { //Closing menu
        body.classList.remove("noscroll");
        header.classList.remove("open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");

        fadeElems.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
    });

    } 

    else{ //Opening menu
        header.classList.add("open");
        body.classList.add("noscroll");

        fadeElems.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
    });

    }
});

