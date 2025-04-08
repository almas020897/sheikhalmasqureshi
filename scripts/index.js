function sec1() {
  var typed = new Typed(".sec1 .text-box h4", {
    strings: [
      "Transforming Ideas into Code, and Code into Impactful Solutions",
    ],
    typeSpeed: 30,
    backSpeed: 10,
    loop: true,
  });

  gsap.fromTo(
    ".art",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec1",
        start: "top top",
        end: "900",

        scrub: true,
      },
    }
  );
}
sec1();

function sec3() {
  gsap.to(".work-btn", {
    scrollTrigger: {
      trigger: ".sec3",
      start: "top 60%",
      end: "top 0%",
      scrub: 1,
    },
    top: "50%",
  });

  let wb = document.querySelector(".work-btn");
  wb.addEventListener("click", (event) => {
    event.preventDefault();
    gsap.to(window, { scrollTo: "#skills", duration: 1 });
  });
}
sec3();

function sec5() {
  var typed = new Typed(".ls-heading", {
    strings: ["modern and creative", "developer from India."],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });
  var typed = new Typed(".pt-heading", {
    strings: ["modern and creative", "developer from India."],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });
}
sec5();

function sec7() {
  let btns = document.querySelectorAll(".sec7 .btn-box .btn");
  let certbtn = document.querySelector(".sec7 .btn-box .cert-btn");
  let edubtn = document.querySelector(".sec7 .btn-box .edu-btn");
  let certcont = document.querySelector(".sec7 .cert-content");
  let educont = document.querySelector(".sec7 .edu-content");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (index === 0) {
        btn.style.backgroundColor = "#233dd4";
        edubtn.style.backgroundColor = "transparent";
        certcont.style.display = "flex";
        educont.style.display = "none";
      }
      if (index === 1) {
        btn.style.backgroundColor = "#233dd4";
        certbtn.style.backgroundColor = "transparent";
        educont.style.display = "flex";
        certcont.style.display = "none";
      }
    });
  });
}
sec7();

function sec8() {
  const itemsL = gsap.utils.toArray(".ileft");
  const itemsR = gsap.utils.toArray(".iright");
  console.log(window.screen.width);

  if (window.screen.width < 1020) {
    // Left gallery block
    itemsL.forEach((item) => {
      gsap.fromTo(
        item,
        {
          width: "0%",
          opacity: 0,
        },
        {
          width: "100%",
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });

    // right gallery block
    itemsR.forEach((item) => {
      gsap.fromTo(
        item,
        {
          width: "0%",
          opacity: 0,
        },
        {
          width: "100%",
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  } else {
    // Left gallery block
    itemsL.forEach((item) => {
      gsap.fromTo(
        item,
        {
          width: "0%",
          opacity: 0,
        },
        {
          width: "50%",
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });

    // right gallery block
    itemsR.forEach((item) => {
      gsap.fromTo(
        item,
        {
          width: "0%",
          opacity: 0,
        },
        {
          width: "50%",
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }
}
sec8();

function btnAnimation() {
  let btn = document.querySelectorAll(".btn");
  btn.forEach((elem, index) => {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.children[1], {
        top: "50%",
        transform: "translate(-50%, -50%)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.children[1], {
        top: "-200%",
        transform: "translate(-50%, 0%)",
        onComplete: () => {
          elem.children[1].style.top = "100%";
        },
      });
    });
  });
}
btnAnimation();

let eb1 = document.getElementById("eb1");
let eb2 = document.getElementById("eb2");

eb1.addEventListener("click", function () {
  const scrollPosition = document.getElementById("work").offsetTop;
  sessionStorage.setItem("scrollPosition", scrollPosition);

  window.location.href = "exl.html";
});

eb2.addEventListener("click", function () {
  const scrollPosition = document.getElementById("work").offsetTop;
  sessionStorage.setItem("scrollPosition", scrollPosition);

  window.location.href = "dxc.html";
});

window.addEventListener("load", function () {
  const savedScrollPosition = sessionStorage.getItem("scrollPosition");

  if (savedScrollPosition) {
    gsap.to(window, {
      scrollTo: "#work",
      duration: 1,
    });

    sessionStorage.removeItem("scrollPosition");
  }
});
