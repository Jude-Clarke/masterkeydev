const key = document.querySelectorAll(".halve");
const doors = document.querySelector(".doors");
const door = document.querySelectorAll(".door");
const bg = document.querySelector(".background");

let inserted = false;
let turn = 0;
let xval = -6;

function insertKey() {
  if(inserted === false){
    xval *= -1;
    for(var i = 0; i < key.length; i++) {
      key[i].style.top = "40vh";
      key[i].style.filter= "drop-shadow("+ xval*-1 + "px 3px 6px black)";
    }
    setTimeout(turnKey, 1000);
    setTimeout(enlargeDoors, 2500);
    setTimeout(openDoors, 3500);
    setTimeout(whiteout, 5200);
    setTimeout(goToHome, 5200);

    inserted = true;
  } else {
    doors.style.filter = "none";
    for(var i = 0; i < key.length; i++) {
      key[i].style.top = "0vh";
      key[i].style.filter= "none";
    }
    inserted = false;
  }
}
function turnKey() {
  turn += 180;
  for(var i = 0; i < key.length; i++) {
    key[i].style.transform = "rotateY(" + turn + "deg)";
    key[i].style.filter= "drop-shadow("+ xval + "px 3px 6px black)";
  }
}
function enlargeDoors() {
  doors.style.transition = "1s";
  doors.style.transform = "rotateY(" + turn + "deg) scale(4.2)";
  doors.style.webkitBoxReflect = "below 3px linear-gradient(transparent, rgba(0, 0, 0, .13)";
  key[1].style.opacity = "0";
}

function reflect() {
  bg.classList.add("reflect");
  const reflection = document.querySelector(".reflect");
  reflection.style.boxShadow = "rgb(209, 167, 58) 0px 84px 30px, rgb(209, 167, 58) 0px -24px 30px";
}

function openDoors() {
    bg.style.opacity = "1";
    doors.style.filter = "none";
    door[0].style.webkitTransform = "perspective(900) rotateY(-170deg)";
    // door[0].style.filter = "drop-shadow(70px 10px 30px #ffc90b)";
    door[1].style.webkitTransform = "perspective(900) rotateY(170deg)";
    // door[1].style.filter = "drop-shadow(-70px 10px 30px #ffc90b)";
    doors.style.webkitBoxReflect = "below 3px linear-gradient(transparent, rgba(0, 0, 0, 0)";

    reflect();

    // setTimeout(function(){
    //   door[0].style.filter = "drop-shadow(-70px 10px 30px #ffc90b)";
    // }, 500)
    // setTimeout(function(){
    //   door[1].style.filter = "drop-shadow(70px 10px 30px #ffc90b)";
    // }, 500);
}

function whiteout() {
  document.querySelector(".whiteout").style.opacity = "1";
}

function goToHome() {
  location.replace("/home");
}

setTimeout(insertKey, 300);
// for(var i = 0; i < key.length; i++) {
//   window.addEventListener("keydown", insertKey);
// }
