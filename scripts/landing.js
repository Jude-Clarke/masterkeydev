const year = new Date().getFullYear()
const copyright = document.querySelector(".date");
copyright.textContent = year;

const getQuote = document.querySelectorAll(".get-quote");
const expenses = document.querySelector(".expenses");
const winning = document.querySelector(".winning");
const check = document.querySelectorAll("#value img");
const footerLogo = document.querySelector("footer .logo img");
let spin = 0;

for(var i = 0; i < getQuote.length; i++) {
  getQuote[i].addEventListener("click", ()=>{
    swipe();
    setTimeout(function() {
      window.location.href = "contact#message";
    }, 1800);
  });
};


window.addEventListener('scroll', function() {
  // Checks
  for (var i = 0; i < check.length; i++) {
    if(window.scrollY < 443) {
      check[i].classList.remove("bounce");
      check[i].style.opacity = "0";
      check[i].style.transform = "scale(.05)";
    } else {
      check[i].style.opacity = "1";
      check[i].classList.add("bounce");
      check[i].style.transform = "scale(1)";
    }
  };
  // ad
  if(window.scrollY < 3163) {
    expenses.style.transform = "scale(1)";
  } else {
    if(window.scrollY < 3573) {
      expenses.style.transform = "scale(1.2)";
      winning.style.transform = "scale(1)";
    } else {
      winning.style.transform = "scale(1.2)";
      expenses.style.transform = "scale(1)";
    }
  };

  // Footer Logo
  if(window.scrollY > 5000) {
    footerLogo.style.transition = "all 2s ease-out"
    footerLogo.style.transform= "rotateY(1800deg)";
  } else {
    footerLogo.style.transition = "none"
    footerLogo.style.transform= "rotateY(0deg)";
  }

  console.log(window.scrollY);
});

//Carousel
const thumbnails = document.getElementsByClassName("thumbnail");
const activeImages = document.getElementsByClassName("active");
const slider = document.getElementById("slider");
const buttonRight = document.getElementById("slide-right");
const buttonLeft = document.getElementById("slide-left");

for (var i=0; i < thumbnails.length; i++) {
thumbnails[i].addEventListener("mouseover", function(){
 if(activeImages.length > 0){
   activeImages[0].classList.remove("active")
 }
 this.classList.add("active");
 document.getElementById("featured").src = this.src;
});
};

buttonLeft.addEventListener("click", function(){
document.getElementById("slider").scrollLeft -= slider.clientWidth;
});
buttonRight.addEventListener("click", function(){
document.getElementById("slider").scrollLeft += slider.clientWidth;
});

// Carousel2
const thumbnails2 = document.getElementsByClassName("thumbnail2");
const activeImages2 = document.getElementsByClassName("active2");
const slider2 = document.getElementById("slider2");
const buttonRight2 = document.getElementById("slide-right2");
const buttonLeft2 = document.getElementById("slide-left2");

for (var i=0; i < thumbnails2.length; i++) {
thumbnails2[i].addEventListener("mouseover", function(){
 if(activeImages.length > 0){
   activeImages[0].classList.remove("active2")
 }
 this.classList.add("active2");
 document.getElementById("featured2").src = this.src;
});
};

buttonLeft2.addEventListener("click", function(){
document.getElementById("slider2").scrollLeft -= slider.clientWidth;
});
buttonRight2.addEventListener("click", function(){
document.getElementById("slider2").scrollLeft += slider.clientWidth;
});

// Outer carousel
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);

// arrange the slides next to one another
function setSlidePosition(){
  for(var i = 0; i < slides.length; i++){
    slides[i].style.left = slideWidth * i + "px";
  }
}
setSlidePosition();

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left; + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if(targetIndex === 0){
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
}

// when I click left, move slides to the left
prevButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);

});
// when I click right, move slides to the right
nextButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});


// when I click the nav indicators, move to that slide

dotsNav.addEventListener("click", e => {
  // what indicator was clicked?
  const targetDot = e.target.closest("button");

  if(!targetDot)return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
