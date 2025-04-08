gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);

const scroller = ScrollSmoother.create({
  wrapper: ".wrapper1",
  content: ".wrapper2",
  smooth: 1.5,
  effects: true,
  normalizeScroll: true,
});

scroller.scrollTrigger.refresh();

function mouseEffect() {
  Shery.makeMagnet(".magnet");
}
mouseEffect();

function nav() {
  let link = document.querySelector(".nav .linkbox");

  link.children[1].addEventListener("click", (event) => {
    event.preventDefault();
    gsap.to(window, { scrollTo: "#work", duration: 1 });
  });

  link.children[2].addEventListener("click", (event) => {
    event.preventDefault();
    gsap.to(window, { scrollTo: "#about", duration: 1 });
  });
  link.children[3].addEventListener("click", (event) => {
    event.preventDefault();
    gsap.to(window, { scrollTo: "#contact", duration: 1 });
  });

  gsap.to(".nav a", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec2",
      start: "top 80%",
      scrub: 1,
    },
    color: "#fff",
    letterSpacing: "0.05vmax",
  });
  gsap.to(".nav .menu-btn", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec2",
      start: "top 80%",
      scrub: 1,
    },
    backgroundColor: "#141414",
  });

  var mbtn = document.querySelector(".menu-btn");
  var mbox = document.querySelector(".menu-box");
  var toggle = 0;

  mbtn.addEventListener("click", function (dets) {
    if (toggle == 0) {
      gsap.to(".home-btn", {
        display: "none",
      });
      gsap.to(mbtn, {
        delay: 0.2,
        backgroundColor: "#334bd3",
        border: "none",
      });
      gsap.to(dets.target.children[0], {
        top: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)",
      });
      gsap.to(dets.target.children[1], {
        top: "50%",
        transform: "translate(-50%, -50%) rotate(-45deg)",
      });
      gsap.to(mbox, {
        height: "100vh",
        display: "flex",
      });
      gsap.to(".page-btn", {
        delay: 0.3,
        opacity: 1,
        marginRight: "0",
        stagger: 0.1,
      });

      toggle = 1;
    } else {
      gsap.to(".home-btn", {
        delay: 1.1,
        display: "initial",
      });
      gsap.to(mbtn, {
        delay: 1,
        backgroundColor: "#141414",
      });
      gsap.to(dets.target.children[0], {
        top: "45%",
        transform: "translate(-50%, -50%) rotate(0deg)",
      });
      gsap.to(dets.target.children[1], {
        top: "55%",
        transform: "translate(-50%, -50%) rotate(0deg)",
      });
      gsap.to(mbox, {
        delay: 0.7,
        height: "0vh",
        bottom: "100%",
        display: "none",
        onComplete: function () {
          mbox.style.bottom = "0%";
        },
      });
      gsap.to(".page-btn", {
        opacity: 0,
        marginRight: "10vw",
        stagger: 0.1,
      });

      toggle = 0;
    }
  });
}
nav();
