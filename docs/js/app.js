$(document).ready(function(){
    // const menus = $( '#menus' );
    // const cm = $( '#collapse-menu' );
    // const contact =  $( '#header-contact-area' );
    // const logo = $( '#logo-area' );
    const win = $( window );
    // const header = $( 'header' );
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