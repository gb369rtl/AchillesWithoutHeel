// play sound when button pressed
var n = document.querySelectorAll(".drum").length;
for (let i = 0; i < n; i++) {
  let ele = document.querySelectorAll(".drum")[i];
  ele.addEventListener("click", function (event) {
    var text = ele.innerHTML;
    playSound(event.innerHTML);
  });
}


// play sound when key pressed
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnnimation(event.key)
});

function playSound(text) {
  console.log(text);
  if (text === "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (text === "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (text === "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (text === "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (text === "j") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (text === "k") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (text === "l") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
}

function buttonAnnimation(text) {
    var ele = document.querySelector("." + text);
    ele.classList.add("pressed");
    setTimeout(function (){
        ele.classList.remove("pressed");
    },100);
}
