$(function(){
    $('.menu-movile-item').css({
        display:'none'
    })
    $('.icon-menu-hamburguesa').click(function () {
        $('.menu-movile-item').toggle(function(){
            gsap.from('.menu-movile-item', { duration: 1})
        });
    });

});