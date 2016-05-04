
// Small function to use if you are not using jquery
// Loads page before calling functions
// function addLoadEvent(func) {
//   var oldonload = window.onload;
//   if (typeof window.onload != 'function') {
//     window.onload = func;
//   } else {
//     window.onload = function() {
//       oldonload();
//       func();
//     }
//   }
// }

// This is called from prepareInternalNav
// prepareInternalNav passes to this function the sectionId stored in the ID parameter
function showSection(id) {
  // Declare variables
  var content, contentDivs;
  // Grab the element with an ID of 'content' (more efficient)
  content = document.getElementById("content");
  // Grab all divs inside 'content'
  contentDivs = content.getElementsByTagName("div");
  // Loop thru all divs inside content
  for (var i=0; i<contentDivs.length; i++ ) {
    // If div has a class name of section, skip to next iteration
    if (contentDivs[i].className.indexOf("section") == -1) {
      continue;
    }
    // Look for a match between sectionId and content div ID...
    // If no match...
    if (contentDivs[i].getAttribute("id") != id) {
      contentDivs[i].style.display = "none";
    // if match... show div
    } else {
      contentDivs[i].style.display = "block";
    }
  }
}

function prepareInternalNav() {
  // Declare Variables
  var internalNav, links, i, sectionId;
  // Object Detection
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  // Does Internal Nav ID Exist?
  if (!document.getElementById("internal-nav")) return false;
  internalNav = document.getElementById("internal-nav");
  // Grab all anchor tabs inside internalNav
  links = internalNav.getElementsByTagName("a");
  // Loop thru all links (inside internalNav)
  for (i = 0; i < links.length; i++ ) {
    // Grab href value without # for each link inside internalNav
    sectionId = links[i].getAttribute("href").split("#")[1];
    // If while looping thru all links inside internalNav and you find a link that does not have a section ID
    if (!document.getElementById(sectionId)) {
      // skip over it and move on to next iteration of the loop.
      continue;
    }
    // Hide all elements that have the sectionId
    document.getElementById(sectionId).style.display = "none";
    // Because of scope sectionId is hidden from the following function
    // anonymous function
    // Store sectionID inside the property of the array called 'destination'
    links[i].destination = sectionId;
    // So when I click on any link inside internal that passes all of our prechecks call the anonymous function
    links[i].onclick = function() {
      // call the showsection function and pass it sectionId that we previosly stored as a property of the array iteration
      // 'this' is a way we can refer to whatever item was clicked
      showSection(this.destination);
      // All functions return a value, this function will not so we just return nothing or false.
      return false;
    }
  }
}

// addLoadEvent(prepareInternalNav);


$(document).ready(function (){
  prepareInternalNav();
});
