// $(document).ready(function (){
  // console.log('ready');
// });


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function showSection(id) {
  var divs = document.getElementsByTagName("div");
  for (var i=0; i<divs.length; i++ ) {
    if (divs[i].className.indexOf("section") == -1) continue;
    if (divs[i].getAttribute("id") != id) {
      divs[i].style.display = "none";
    } else {
      divs[i].style.display = "block";
    }
  }
}

function prepareInternalNav() {
  console.log('hello');
//   if (!document.getElementsByTagName) return false;
//   if (!document.getElementById) return false;
//   if (!document.getElementById("internalnav")) return false;
//   var nav = document.getElementById("internalnav");
//   var links = nav.getElementsByTagName("a");
//   for (var i=0; i<links.length; i++ ) {
//     var sectionId = links[i].getAttribute("href").split("#")[1];
//     if (!document.getElementById(sectionId)) continue;
//     document.getElementById(sectionId).style.display = "none";
//     links[i].destination = sectionId;
//     links[i].onclick = function() {
//       showSection(this.destination);
//       return false;
//     }
//   }
}

addLoadEvent(prepareInternalNav);
