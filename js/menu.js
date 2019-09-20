let navMobile = document.querySelector(".hmbMenu"),
        dropDown = document.querySelector(".topNav"),
        list = document.querySelector(".navList"),
        state = false;

    function toggleMenu() {
      dropDown.classList.toggle("toggleOn");
      list.classList.toggle("show");
      if(state) {
        navMobile.src = "images/hmbrMenu.png";
        state = false;
    }
      else{
        navMobile.src = "images/close.png";
        state = true;
    }
  }

  navMobile.addEventListener("click", toggleMenu);

  let vidPlay = document.querySelector("#play"),
      vidPause = document.querySelector("#pause");
      video = document.querySelector("video");

      vidPlay.addEventListener("click", function() {
        video.play();
      });

      vidPause.addEventListener("click", function() {
        video.pause();
      });

  // errors were forcing the image to not change on toggle since there are about tags in main that are heavilly affecting nav.
  // so (Austin) I moved the menu to this and swapped out the srcs.