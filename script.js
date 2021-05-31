$( document ).ready(function() {
    new WOW().init();
  });

  let mockup = document.getElementById('mockup');
  
  window.addEventListener('scroll', function(){
    let value = window.scrollY;
    mockup.style.left = value * 500 + 'px';
  });