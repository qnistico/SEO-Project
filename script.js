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
    delay: 200
});     

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
    
    sr.reveal('.blogitem-1',  {
        reset: 'true',
        delay: '250',
        origin: 'top'
    })
    sr.reveal('.blogitem-2',  {
        reset: 'true',
        delay: '375',
        origin: 'top'
    })
    sr.reveal('.blogitem-3',  {
        reset: 'true',
        delay: '500',
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
    sr.reveal('.fs-1',  {
        reset: 'true',
        delay: '100'
        })
    sr.reveal('.fs-2',  {
        reset: 'true',
        delay: '175'
        })
    sr.reveal('.fs-3',  {
        reset: 'true',
        delay: '250'
        })
    sr.reveal('.fs-4',  {
        reset: 'true',
        delay: '325'
        })
    sr.reveal('.fs-5',  {
        reset: 'true',
        delay: '400'
        })
