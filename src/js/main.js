$(document).ready(function () {
    // ADD AND REMOVE MOBILE MENU EVENT LISTENER FOR SMOOTH ANIMATION
    let headerMenu = $('header .mobile_menu_wrap')[0];
    $('.mobile_menu_wrap').click(function(e){
        console.log(e.target.tagName);
        if(!$(e.target).closest('ul').length || e.target.tagName === 'A'){
            $(headerMenu).animate({width: 'toggle'}, 200);
        }
    });
    $('.mobile_icon').click(function(){
        $(headerMenu).animate({width: 'toggle'}, 200);
    })


});

