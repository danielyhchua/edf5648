/*******************
 *
 *   NAVBAR
 *
 *******************/
// When the user scrolls the page, execute functions
window.onscroll = function() {
  addSticky();
  addActive();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Get position of all sections
var workExpPos = document.querySelector("#work-experience").offsetTop;
var eduPos = document.querySelector("#education").offsetTop;
var skillsPos = document.querySelector("#skills").offsetTop - 1;
// var footer = document.querySelector("footer");
// var footerPos = footer.offsetTop;

// Get nav li items
var navList = document.querySelectorAll(".nav-item");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-nav")
  } else {
    navbar.classList.remove("sticky-nav");
  }
}

// Add active class for correct scroll position
function addActive() {
  var posIndex;
  if (window.pageYOffset < workExpPos) {
    posIndex = 0;
  } else if (window.pageYOffset >= workExpPos && window.pageYOffset < eduPos) {
    posIndex = 1;
  } else if (window.pageYOffset >= eduPos && window.pageYOffset < skillsPos) {
    posIndex = 2;
  } else if (window.pageYOffset >= skillsPos) {
    posIndex = 3;
  }
  navList.forEach((item, i) => {
    if (posIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}