
//grabbing card elements
const card = document.querySelector(".card");
const img = document.querySelector(".card img");
const container = document.querySelector(".card-container");
const desc = document.querySelector(".card-description");
const innerCard = document.querySelector('.card__inner');
const isFlipped = function () {
  return innerCard.classList.contains("is-flipped")
};
// const imgContainer = document.querySelector("#spend-ad");

innerCard.addEventListener("click", flip);
document.addEventListener("mousemove", () => {
  if(window.innerWidth < 800) {
    if(isFlipped()){
      flip();
    }
    card.style.transform = "rotateY(0) rotateX(0) rotate(10deg) scale(.75)";
    card.style.marginTop = "-50px";
  };
});
//moving animation event
container.addEventListener("mousemove", (e) => {
  if(window.innerWidth > 800) {
    // console.log(e.pageX, (e.pageX-500), e.pageY);
    let xAxis = (window.innerWidth / 1.3 - e.pageX) /10;
    let yAxis = -(window.innerHeight / 2 - e.pageY) /15.385;
    if(isFlipped()){
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    } else {
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${-yAxis}deg)`;
    desc.style.transform = "translateZ(10px)";
    img.style.setProperty("-webkit-filter", "drop-shadow(" + (xAxis -33) + "px " + (33-yAxis)/2 + "px 10px rgba(0, 0, 0, 0.25))");
    // console.log(card.style.transform);
    }
  }
});
//Animate In
container.addEventListener('mouseenter', e=> {
  if(window.innerWidth > 800) {
    card.style.transition = "none";
    // desc.style.transition = "none";
    img.style.transition = "none";
      //
  }
});
//Animate Out
container.addEventListener("mouseleave", (e)=> {
  if(window.innerWidth > 800) {
    if(isFlipped()){
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    } else {
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      desc.style.transform = "translateZ(0px)";
      card.style.transition = "all 0.7s ease";
      img.style.transition = "-webkit-filter 0.7s ease";
      img.style.setProperty("-webkit-filter", "drop-shadow(-33px 33px 10px rgba(0, 0, 0, 0.25))")
    }
  }
  if(isFlipped()){
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  } else {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    desc.style.transform = "translateZ(0px)";
    card.style.transition = "all 0.7s ease";
    img.style.transition = "-webkit-filter 0.7s ease";
    img.style.setProperty("-webkit-filter", "drop-shadow(-33px 33px 10px rgba(0, 0, 0, 0.25))")
  }
});

function flip() {
  if(window.innerWidth > 800 || isFlipped()) {
    innerCard.classList.toggle("is-flipped");
    desc.classList.toggle("enlarge");
    desc.classList.toggle("blink");
    card.style.transform = `rotateY(0deg) rotate(0deg)`;
  }
}
function swipe(){
  if(isFlipped()){
    flip();
  }
  card.style.transition = "transform .5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  container.style.left = "32%";
  container.style.bottom = "300px";
  setTimeout(()=>{
    container.style.bottom = "-100px";
    setTimeout(()=>{
      container.style.left = "60px";
      container.style.bottom = "120px";
    }, 600);
  }, 600);
}
