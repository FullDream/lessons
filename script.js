$(document).ready( function() {

    $('.col-sm-3').on('click', function() {
        $('.overlay').fadeIn();
        $('.modal').slideDown(300);
    });
    $('.close').on('click', () => {
        $('.overlay').fadeOut();
        $('.modal').slideUp(300);
    });

});

