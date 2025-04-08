function sec1() {
  let workboxes = document.querySelectorAll(".workbox");

  workboxes.forEach((wb) => {
    wb.addEventListener("mousemove", function (dets) {
      wb.children[3].style.scale = 1;
      wb.children[3].style.transform = `translate(${dets.screenX * 0.3}px, ${
        dets.screenY * 0.05
      }px)`;
    });

    wb.addEventListener("mouseleave", function () {
      wb.children[3].style.scale = 0;
    });
  });
}
sec1();

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
