// map
var locationOpen = document.querySelector(".location");
var locationMain = document.querySelector(".pop-up-location");
var locationClose = document.querySelector(".pop-up-location-close");

locationOpen.addEventListener("click", function(event) {
    event.preventDefault();
    locationMain.classList.toggle("pop-up-location-show");
});

locationClose.addEventListener("click", function(event) {
    event.preventDefault();
    locationMain.classList.remove("pop-up-location-show");
});

// hidden menu
var menuLogo = document.querySelector(".menu-logo");
var menu = document.querySelector(".menu");

menuLogo.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("menu-show");
});


var searchLogo = document.querySelector(".search-logo");
var search = document.querySelector(".search");

searchLogo.addEventListener("click", function(event) {
    event.preventDefault();
    search.classList.toggle("search-show");
});


var menuHidden = document.querySelector("nav .menu .button");
var menuHiddenShow = document.querySelector(".menu-hidden");

menuHidden.addEventListener("click", function(event) {
    event.preventDefault();
    menuHiddenShow.classList.toggle("menu-hidden-show");
});


// slider

var leftToggle = document.querySelector(".slider i.left");
var rightToggle = document.querySelector(".slider i.right");
var imagesToggle = document.querySelectorAll(".slider img");
var controlToggle = document.querySelectorAll(".control i");
var popularServicesToggle = document.querySelectorAll(".popular-services .service");

i = 0;

rightToggle.addEventListener("click", pushRightToggle );

function pushRightToggle(){
    imagesToggle[i].classList.remove("show");
    controlToggle[i].classList.remove("active");
    popularServicesToggle[i].classList.remove("show");
    i++;
    if (i >= imagesToggle.length) {
        i = 0;
    }
    imagesToggle[i].classList.add("show");
    controlToggle[i].classList.add("active");
    popularServicesToggle[i].classList.add("show");
}

leftToggle.addEventListener("click", pushLeftToggle );

function pushLeftToggle() {
    imagesToggle[i].classList.remove("show");
    controlToggle[i].classList.remove("active");
    popularServicesToggle[i].classList.remove("show");
    i--;
    if (i < 0) {
        i = imagesToggle.length - 1;
    }
    imagesToggle[i].classList.add("show");
    controlToggle[i].classList.add("active");
    popularServicesToggle[i].classList.add("show");
}

setInterval(pushRightToggle, 8000);


// section.aboutus

var showText = document.querySelector("section.aboutus .content button.show-text");
var hiddenContent = document.querySelector("section.aboutus .content .hidden");
var hideText = document.querySelector("section.aboutus .content button.hide-text");

showText.addEventListener("click", function(event) {
    event.preventDefault();
    hiddenContent.classList.add("show");
    hideText.classList.remove("hidden-button");
    showText.classList.add("hidden-button");
});

hideText.addEventListener("click", function(event) {
  event.preventDefault();
  hiddenContent.classList.remove("show");
  hideText.classList.add("hidden-button");
  showText.classList.remove("hidden-button");
});


// section.services

var showTextLong = document.querySelectorAll("section.services article button.show-text");
var showTextShort = document.querySelectorAll("section.services article button.hide-text");
var textLong = document.querySelectorAll("section.services article .text-long");
var textShort = document.querySelectorAll("section.services article .text-short");
var textWide = document.querySelectorAll("section.services article");

function showTextLongFun(i) {
  textWide[i].classList.add("text-wide");
  textShort[i].classList.remove("show");
  textLong[i].classList.add("show");
  showTextLong[i].classList.remove("show");
  showTextShort[i].classList.add("show");
}

function showTextShortFun(i) {
  textWide[i].classList.remove("text-wide");
  textShort[i].classList.add("show");
  textLong[i].classList.remove("show");
  showTextLong[i].classList.add("show");
  showTextShort[i].classList.remove("show");
}

showTextLong[0].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(0);
});

showTextShort[0].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(0);
});

showTextLong[1].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(1);
});

showTextShort[1].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(1);
});

showTextLong[2].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(2);
});

showTextShort[2].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(2);
});

showTextLong[3].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(3);
});

showTextShort[3].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(3);
});

showTextLong[4].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(4);
});

showTextShort[4].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(4);
});

showTextLong[5].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(5);
});

showTextShort[5].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(5);
});

showTextLong[6].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(6);
});

showTextShort[6].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(6);
});

showTextLong[7].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(7);
});

showTextShort[7].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(7);
});

showTextLong[8].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(8);
});

showTextShort[8].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(8);
});

showTextLong[9].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(9);
});

showTextShort[9].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(9);
});

showTextLong[10].addEventListener("click", function(event) {
  event.preventDefault();
  showTextLongFun(10);
});

showTextShort[10].addEventListener("click", function(event) {
  event.preventDefault();
  showTextShortFun(10);
});
