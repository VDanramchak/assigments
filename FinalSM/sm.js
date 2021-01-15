
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/* when a user clicks, toggle the 'is-animating' class */
$(".heart").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".heart").on('animationend', function(){
  $(this).toggleClass('is_animating');
});

