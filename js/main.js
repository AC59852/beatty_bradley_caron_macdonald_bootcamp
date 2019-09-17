(() => {

    let bio = document.querySelector("#bioText"),
        anim = document.querySelectorAll(".animWhite"),
        btn = document.querySelectorAll(".button"),
        anim3 = document.querySelector(".wb4");

    console.log('fired!');
function animation() {
    for (var i = 0; i < anim.length; i++) {
        anim[i].classList.add('whiteBox');
        anim[i].classList.remove('hidden');
      };
    };

    function animationCheck() {
        console.log("Animation has started");
    }

    function animationEnded() {
        console.log("Animation is over");
        for (var i = 0; i < anim.length; i++) {
            anim[i].classList.remove('whiteBox');
            anim[i].classList.add('hidden');
          };
        };

    anim.forEach(anim => anim.addEventListener("animationstart", animationCheck));
    anim3.addEventListener("animationend", animationEnded);

    btn.forEach(btn => btn.addEventListener("click", animation));

})();