function showPic(whichPic) {
  // console.log('hello from showPic')
  var source,
      placeholder,
      titleText,
      description;
  if (!document.getElementById('placeholder')) return true;
  source = whichPic.getAttribute('href');
  console.log(source);
  placeholder = document.getElementById( 'placeholder' );
  placeholder.setAttribute( 'src', source );
  if (!document.getElementById('description')) return false;
  if (true) {
    titleText = whichPic.getAttribute('title');
  } else {
    titleText = '';
  }
  description = document.getElementById('description');
  if (description.firstChild.nodeType === 3) {
    description.firstChild.nodeValue = titleText;
  }
  return false;
}

function preparePlaceholder() {
  var placeholder,
  description,
  descriptionText,
  gallery,
  contentHook;
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById('image-gallery')) return false;
  console.log('placeHolder');
  placeholder = document.createElement('img');
  contentHook = document.getElementById('content');
  contentHook.appendChild(placeholder);
  placeholder.setAttribute('id','placeholder');
  placeholder.setAttribute('src','images/placeholder.gif');
  placeholder.setAttribute('alt','my image gallery');
  description = document.createElement('p');
  description.setAttribute('id','description');
  descriptionText = document.createTextNode('Choose an image');
  description.appendChild(descriptionText);
  contentHook.appendChild(description)
//   var gallery = document.getElementById('imagegallery');
//   insertAfter(description,gallery);
//   insertAfter(placeholder,description);
}

function prepareGallery() {
  // console.log('it works');
  var gallery,
  links,
  i;
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById('image-gallery')) return false;

  //hook into image directory
  gallery = document.getElementById('image-gallery');
  // console.log(gallery);
  links = gallery.getElementsByTagName('a');
  // console.log(links[3]);
  for ( i=0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
    }
  }
}

// addLoadEvent(preparePlaceholder);
$(document).ready(function (){
  preparePlaceholder();
  prepareGallery();
});
// addLoadEvent(prepareGallery);
