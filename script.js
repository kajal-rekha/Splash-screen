"use strict";

// splash screen
const intro = document.querySelector(".intro");
const introLogo = document.querySelectorAll(".intro-logo");

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    introLogo.forEach((logo, i) => {
      setTimeout(() => {
        logo.classList.add("active");
      }, 500 * (i + 1));
    });

    // logo disapparing
    setTimeout(() => {
      introLogo.forEach((logo, i) => {
        setTimeout(() => {
          logo.classList.remove("active");
          logo.classList.add("fade");
        }, 100 * (i + 1));
      });
    }, 2000);

    // screen disapper
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

// smooth scroll

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//////////////////////////////////////////
// cursor mouses
////////////////////////////////////////////
const innerCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");
const links = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;

  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
});

links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    innerCursor.classList.add("grow");
  });

  link.addEventListener("mouseleave", function () {
    innerCursor.classList.remove("grow");
  });
});
