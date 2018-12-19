$(document).ready(() => {
    let toogle = false;
    $('.obj-cart h3').on('click', function () {
        if (toogle===false) {
         toogle=true;
            $('.wrap-cart').css({'display' : 'block'});
        }else {
            toogle=false;
            $('.wrap-cart').css({'display' : 'none'});
        }
    });
});