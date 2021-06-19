$(document).ready(function () {
  new WOW().init();
});

let mockup = document.getElementById("mockup");

window.addEventListener("scroll", parallax);

function parallax() {
  function getPosition(item) {
    let top = (
      (item.getBoundingClientRect().top / window.innerHeight / 2) *
      100
    ).toFixed(0);

    return top;
  }

  let itemsToParallax = document.getElementsByClassName("parallaxify");

  for (let item of itemsToParallax) {
    if (!item.dataset.speedMultiplier) {
      item.dataset.speedMultiplier = "0.7";
    }
    item.style.position = "relative";

    item.style.top = getPosition(item) * item.dataset.speedMultiplier + "px";
  }

  let imagesToParallax = document.getElementsByClassName("parallaxifyBg");

  for (let item of imagesToParallax) {
    function getPosition(item) {
      let top = (
        (item.getBoundingClientRect().top / window.innerHeight / 2) *
        100
      ).toFixed(0);

      return top;
    }

    if (!item.dataset.speedMultiplier) {
      item.dataset.speedMultiplier = "0.5";
    }

    item.style.backgroundAttachment = "none";
    item.style.backgroundPositionY =
      getPosition(item) * item.dataset.speedMultiplier + "%";
  }
}

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1) {
    $(".navbar").css("background", "#143d55");
  } else {
    $(".navbar").css("background", "transparent");
  }
});
const sr = ScrollReveal({
  distance: "32px",
  duration: 840,
  delay: 100
});
sr.reveal(".bgi-img", {
  origin: "top",
  delay: "0",
  distance: "100px"
});
sr.reveal(".bgi-icon", {
  origin: "top"
});

sr.reveal(".bgi-h3", {
  origin: "top"
});

sr.reveal(".bgi-p", {
  origin: "top"
});

sr.reveal(".boxgrid-button", {
  origin: "top"
});

sr.reveal(".mic-h2", {
  origin: "top"
});
sr.reveal(".mic-p", {
  origin: "top"
});

sr.reveal(".li-1", {
  origin: "right"
});
sr.reveal(".li-2", {
  origin: "right"
});
sr.reveal(".li-3", {
  origin: "right"
});
sr.reveal(".li-4", {
  origin: "right"
});
sr.reveal(".li-5", {
  origin: "right"
});
sr.reveal(".marketimg-button", {
  origin: "bottom"
});
sr.reveal(".mobileadvert-1", {
  origin: "left",
  distance: "61px"
});
sr.reveal(".mobileadvert-2", {
  origin: "top",
  distance: "61px"
});
sr.reveal(".mobileadvert-3", {
  origin: "bottom",
  distance: "61px"
});
sr.reveal(".mobileadvert-4", {
  origin: "right",
  distance: "61px"
});

sr.reveal(".mobileadvert-h2", {
  origin: "top",
  reset: "true"
});

sr.reveal(".blog-h2", {
  origin: "top"
});
sr.reveal(".contactcontent", {
  distance: "100px",
  origin: "left"
});
sr.reveal(".card", {
  distance: "100px",
  origin: "right"
});
sr.reveal(".sr-p", {
  origin: "top"
});
sr.reveal(".seo-sr-left", {
  origin: "left"
});
sr.reveal(".seo-sr-right", {
  origin: "right"
});

/*
        function swapFunction() {

            document.getElementById("first-img").classList.toggle('firstimgadd');
            document.getElementById("second-img").classList.toggle('secondimgadd');
        }
        function swapFunction2() {

            document.getElementById("third-img").classList.toggle('thirdimgadd');
            document.getElementById("fourth-img").classList.toggle('fourthimgadd');
        }
*/
