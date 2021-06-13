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
const sr = ScrollReveal({
    distance: '32px',
    duration: 840,
    delay: 100
});
sr.reveal('.bgi-img', {
    reset: 'true',
    origin: 'top',
    delay: '0',
    distance: '100px'
})
    sr.reveal('.bgi-icon', {
        reset: 'true',
        origin: 'top',
        delay: '0'
    })
    
    sr.reveal('.bgi-h3', {
        reset: 'true',
        origin: 'top',
        delay: '0'
    })
    
    sr.reveal('.bgi-p', {
        reset: 'true',
        origin: 'top',
        delay: '0'
    })
    
    sr.reveal('.boxgrid-button', {
        reset: 'true',
        origin: 'top',
        delay: '0'
    })
    
    sr.reveal('.mic-h2',  {
        reset: 'true',
        origin: 'top'
    })
    sr.reveal('.mic-p',  {
        reset: 'true',
        origin: 'top'
    })
    
    sr.reveal('.li-1',  {
        reset: 'true',
        origin: 'right'
    })
    sr.reveal('.li-2',  {
        reset: 'true',
        origin: 'right'
    })
    sr.reveal('.li-3',  {
        reset: 'true',
        origin: 'right'
    })
    sr.reveal('.li-4',  {
        reset: 'true',
        origin: 'right'
    })
    sr.reveal('.li-5',  {
        reset: 'true',
        origin: 'right'
    })
    sr.reveal('.marketimg-button',  {
        reset: 'true',
        origin: 'bottom'
    })
    sr.reveal('.mobileadvert-1',  {
        origin: 'left',
        reset: 'true',
        distance: '61px'
    })
    sr.reveal('.mobileadvert-2',  {
        origin: 'top',
        reset: 'true',
        distance: '61px'
    })
    sr.reveal('.mobileadvert-3',  {
        origin: 'bottom',
        reset: 'true',
        distance: '61px'
    })
    sr.reveal('.mobileadvert-4',  {
        origin: 'right',
        reset: 'true',
        distance: '61px'
    })
    
    sr.reveal('.mobileadvert-h2',  {
        origin: 'top',
        reset: 'true'
    })
    
    
    sr.reveal('.blog-h2',  {
        reset: 'true',
        origin: 'top'
    })
    sr.reveal('.contactcontent',  {
        reset: 'true',
        distance: '100px',
        origin: 'left'
    })
    sr.reveal('.card',  {
        reset: 'true',
        distance: '100px',
        origin: 'right'
    })
    sr.reveal('.sr-p',  {
        reset: 'true',
        origin: 'top'
    })

 

    
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
