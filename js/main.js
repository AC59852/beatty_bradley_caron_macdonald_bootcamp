(() => {




    var text = [
        [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`],
        [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`],
        [`My name is Patrick Bradley, I’m a 20-year-old Fanshawe student living in London Ontario. I am mainly focused on motion design and video production, but I am increasingly becoming interested in front end coding.`, `I am a huge fan of Tarantino movies, Nintendo games, anime and I am also a self-taught music producer (although amateur!)`, `I have been editing photos, filming and editing videos since elementary school and combining my knowledge of film, videogames and music is a goal I set for myself every time I design a website.`],
    ];

    let bio = document.querySelector("#bioText"),
        anim = document.querySelectorAll(".anim"),
        anim2 = document.querySelectorAll(".anim2"),
        btn = document.querySelectorAll(".button"),
        span = document.querySelectorAll(".span"),
        anim3 = document.querySelector(".wb4"),
        imgLeft = document.querySelector(".img1"),
        anim6  = document.querySelector(".wb8");

    console.log('fired!');

    function animation1() {
    for (var i = 0; i < anim.length; i++) {
        anim[i].classList.add('whiteBox');
        anim[i].classList.remove('hidden');
        anim[i].classList.remove('blackBox');
      };
    };

    function animation2() {
        for (var i = 0; i < anim2.length; i++) {
            anim2[i].classList.add('hide');
            anim2[i].classList.remove('whiteBox');
          };
        };
    

    function animationCheck() {
        console.log("Animation Has Started");
    }

    function animationEnded() {
        console.log("Animation is Over");
    };

        btn.forEach(btn => {
            btn.addEventListener("click", function(e) {
                let i = this.className.split(" ")[1];
                console.log(i);
                if (i % 2 === 0) {
                    console.log("even");
                    animation1();
                  } else {
                    console.log("odd");
                    animation2();
                  };
            });
          });

          function animationRevealStart() {
            for (var i = 0; i < anim.length; i++) {
                anim2[i].classList.add('blackBox');
                anim2[i].classList.remove('whiteBox');
                anim2[i].classList.remove('hidden');
              };
          };

    anim.forEach(anim => anim.addEventListener("animationstart", animationCheck));
    anim3.addEventListener("animationend", animationRevealStart);
    anim3.addEventListener("animationend", animationEnded);
    anim2.forEach(anim2 => anim2.addEventListener("animationstart", animationCheck));
})();