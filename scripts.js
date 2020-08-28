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
var contextPos = document.querySelector("#context").offsetTop;
var onlineOverviewPos = document.querySelector("#online-learning").offsetTop;
var blendedPos = document.querySelector("#blended-learning").offsetTop;
var designEdPos = document.querySelector("#online-design-ed").offsetTop;

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
  if (window.pageYOffset < contextPos) {
    posIndex = 0;
  } else if (window.pageYOffset >= contextPos && window.pageYOffset < onlineOverviewPos) {
    posIndex = 1;
  } else if (window.pageYOffset >= onlineOverviewPos && window.pageYOffset < blendedPos) {
    posIndex = 2;
  } else if (window.pageYOffset >= blendedPos && window.pageYOffset < designEdPos) {
    posIndex = 3;
  } else if (window.pageYOffset >= designEdPos && window.pageYOffset + document.documentElement.clientHeight !== document.documentElement.scrollHeight) {
    posIndex = 4;
  } else if (window.pageYOffset + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
    posIndex = 5;
  }
  navList.forEach((item, i) => {
    if (posIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}