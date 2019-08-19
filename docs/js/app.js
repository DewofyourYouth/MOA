/*
    Copyright (c) Jacob Shore
*/

$(document).ready(function(){
    const win = $( window );
    const winWidth = win.width();

    if (winWidth > 1000) {
        win.scroll(function(){
            if(window.scrollY > 50){
                $('nav').addClass('scrolled');
            } else {
                $('nav').removeClass('scrolled');
            }

        })
    }

    console.log("Hi!");

});