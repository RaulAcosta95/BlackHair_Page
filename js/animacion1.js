let widthPantalla = document.documentElement.clientWidth;
let secuencia1 = gsap.timeline({});
if (widthPantalla>768) {
    gsap.from('.primera-seccion', {opacity:0, duration: 1}) 
    secuencia1.from('.menu-desktop', {y:-200, duration:1});
    secuencia1.from('.menu-desktop-seccion-logo', {x:-200, duration:1});
    secuencia1.from('.menu-desktop-seccion-enlaces', {y:-100,duration: 1});
    secuencia1.to('.cuadro-blanco-seccion-2', {x:(widthPantalla/8)-100,y:-20, duration: 1});
    setTimeout(() => {
        $(function(){
            gsap.to('.cuadro-blanco-seccion-2', {opacity:1,duration: 0.3})
            $('.cuadro-blanco-seccion-2').addClass('efectos-cuadro-blanco')
        });
    }, 1300);
    secuencia1.from('.texto-seccion-2', {opacity:0, duration: 1})
}
if (widthPantalla<768) {
    gsap.from('.primera-seccion', {opacity:0, duration: 4})
    secuencia1.from('.menu-movile-seccion-logo', {x:-200, duration: 1});
    secuencia1.from('.icon-menu-hamburguesa', {opacity:0, y:-200, duration:1});
    secuencia1.to('.cuadro-blanco-seccion-2', {x:(widthPantalla/2)-100,y:-20, duration: 1});
    setTimeout(() => {
        $(function(){
            gsap.to('.cuadro-blanco-seccion-2', {opacity:1,duration: 0.3})
            $('.cuadro-blanco-seccion-2').addClass('efectos-cuadro-blanco')
        });
    }, 1300);
    secuencia1.from('.texto-seccion-2', {opacity:0, duration: 1})


}


var desorden_imagenes1 = gsap.to('.quinta-seccion-img-1',{
    x:130,
    y:100,
    rotation:160,
    duration:1
});
var desorden_imagenes2 = gsap.to('.quinta-seccion-img-2',{
    y:130,
    x:-160,
    rotation:120,
    duration:1
});
var desorden_imagenes3 = gsap.to('.quinta-seccion-img-3',{
    x:-50,
    y:-100,
    rotation:180,
    duration:1
});

function acomodar() {
    desorden_imagenes1.reverse();
    desorden_imagenes2.reverse();
    desorden_imagenes3.reverse();
}
function desordenar() {
    desorden_imagenes1.play();
    desorden_imagenes2.play();
    desorden_imagenes3.play();
}