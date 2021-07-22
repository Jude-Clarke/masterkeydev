
const gallery = document.querySelector("#gallery");
const images = [];
const imgElements = ["<div class='square'></div>", "<div class='square ipad'></div>", "<div class='square desktop'></div>", "<div class='square desktop'></div>"];

// Add images to array
for(var i = 1; i < 73; i++){
  images.push("8th-grade-celebration-image%20(" + i + ").jpg");
};
// Create an element for each image in the array
for(var i = 0; i < images.length; i++){
  imgElements.unshift("<div class='square'><a href='galleries/8th-grade-celebration-2021/" + images[i] + "' data-lightbox='mygallery' data-title=\"<a href='galleries/8th-grade-celebration-2021/" + images[i] + "' download><button class='btn'><i class='fa fa-download'></i> Download</button></form></a>\" class='image-link'><img src='galleries/8th-grade-celebration-2021/thumbnails/" + images[i] + "' alt='gallery-image' class='thumbnail'></a></div>");
}
//Add imgElements to gallery div
gallery.innerHTML = imgElements.join("");
