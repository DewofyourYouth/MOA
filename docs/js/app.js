/*
    Copyright (c) Jacob Shore
*/
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 10,
    items: 1
});

$(document).ready(function(){
    if (window.scrollY > 50) {
        $('nav').addClass('scrolled');
    }

    const win = $( window );
    const winWidth = win.width();

    $('.history-col').hover(function(){
        $(this).addClass('history-hover');
    }, function(){
        $(this).removeClass('history-hover');
    })


    $('.accordion-item').click(function(){
        $(this).toggleClass('answer-show')
        $(this).children('.answer-text').toggle('slow');
        
    })

    if (winWidth > 1000) {
        win.scroll(function(){
            if(window.scrollY > 50){
                $('nav').addClass('scrolled');
            } else {
                $('nav').removeClass('scrolled');
            }

        })
    }

});  

