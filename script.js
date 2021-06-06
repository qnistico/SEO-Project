$( document ).ready(function() {
    new WOW().init();
  });

  let mockup = document.getElementById('mockup');
  
  window.addEventListener("scroll", parallax)

function parallax() {

    function getPosition(item) {

        let top = (item.getBoundingClientRect().top / window.innerHeight / 2 * 100).toFixed(0)

        return top
    }

    let itemsToParallax = document.getElementsByClassName("parallaxify")

    for (let item of itemsToParallax) {

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "0.7"
        }
        item.style.position = "relative"

        item.style.top = getPosition(item) * item.dataset.speedMultiplier + "px"
    }

    let imagesToParallax = document.getElementsByClassName("parallaxifyBg")

    for (let item of imagesToParallax) {

        function getPosition(item) {

            let top = (item.getBoundingClientRect().top / window.innerHeight / 2 * 100).toFixed(0)

            return top
        }

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "0.5"
        }

        item.style.backgroundAttachment = "none"
        item.style.backgroundPositionY = getPosition(item) * item.dataset.speedMultiplier + "%"
    }
}

// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1) {
            $('.navbar').css('background', '#143d55');
        } else {
            $('.navbar').css('background', 'transparent');
        }
        
        
    });