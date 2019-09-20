import Team from './modules/modules.js';

(() => {
  
    let navMobile = document.querySelector(".hmbMenu"),
        dropDown = document.querySelector(".topNav"),
        list = document.querySelector(".navList"),
        state = false,
        carousel = document.querySelector(".carousel");

    function toggleMenu() {
      dropDown.classList.toggle("toggleOn");
      list.classList.toggle("show");
      if(state) {
        navMobile.src = "images/hmbrMenu.png";
        carousel.classList.remove("hidden");
        state = false;
    }
      else{
        navMobile.src = "images/close.png";
        carousel.classList.add("hidden");
        state = true;
    }
  }

  navMobile.addEventListener("click", toggleMenu);

  
let anim = document.querySelectorAll(".anim1"),
    line4 = document.querySelector(".line3"),
    bioData = document.querySelector(".aboutText").children,
    bioImg = document.querySelector(".aboutPerson").children;

console.log('fired!');

  function parsePersonData() {
    //this = the element you clicked on (the button)
    let person = this.textContent;

 bioData[0].textContent = Team[person].name;
 bioData[1].textContent = Team[person].role;
 bioData[2].textContent = Team[person].bio;

 bioImg[0].src = `images/${Team[person].image}`;
}

for ( let person in Team) {
  console.log(person);
  let currentButton = document.createElement('div');
  currentButton.className = 'name';

  currentButton.textContent = person;
  currentButton.addEventListener("click", parsePersonData);
  currentButton.addEventListener("click", animation);

  document.querySelector('.carousel').appendChild(currentButton);
 };
    
var i;  
function animation() {
for (i = 0; i < anim.length; i++) {
  anim[i].classList.add("animation");
  anim[i].classList.remove("hidden");
  anim[i].classList.remove("animation2");
  anim[i].classList.remove("removeDelay");
  };
};

function animationCheck() {
  console.log("animation started");
}

function animationCheck2() {
  console.log("animation ended");
  for (i = 0; i < anim.length; i++) {
    anim[i].classList.add("animation2");
    anim[i].classList.remove("animation");
    anim[i].classList.add("removeDelay");
  };
};

line4.addEventListener("animationstart", animationCheck);
line4.addEventListener("animationend", animationCheck2);

  let bckMusic = document.querySelector(".bckMusic"),
      musicPlay = document.querySelector("#play"),
      musicPause = document.querySelector("#pause");

      musicPlay.addEventListener("click", function() {
        bckMusic.src = "assets/bckMusic.mp4";
        bckMusic.play();
        bckMusic.volume = 0.1;
      });
      musicPause.addEventListener("click", function() {
        bckMusic.pause();
      })
})();