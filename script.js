let hamburger = document.querySelector(".hamburger-menu");
let navList = document.querySelector("ul");

let navHome = document.querySelector(".home a");
let navPurple = document.querySelector(".purple a");
let navOrange = document.querySelector(".orange a");
let navRed = document.querySelector(".red a");
let navGreen = document.querySelector(".green a");

hamburger.addEventListener("mouseover", function () {
  if (navList.style.visibility === "visible") {
    navList.style.visibility = "hidden";
  } else {
    navList.style.visibility = "visible";
  }
});

navHome.addEventListener("click", function () {
  navList.style.visibility = "hidden"
  document.body.style.backgroundColor = "rgb(255, 255, 255)";
});

navPurple.addEventListener("click", function () {
  navList.style.visibility = "hidden"
  document.body.style.backgroundColor = "purple";
});

navOrange.addEventListener("click", function () {
  navList.style.visibility = "hidden"
  document.body.style.backgroundColor = "orange";
});

navRed.addEventListener("click", function () {
  navList.style.visibility = "hidden"
  document.body.style.backgroundColor = "red";
});

navGreen.addEventListener("click", function () {
  navList.style.visibility = "hidden"
  document.body.style.backgroundColor = "green";
});