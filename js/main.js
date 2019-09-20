(() => {

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
})();