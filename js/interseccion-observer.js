const tercera_seccion = document.querySelector('.tercera-seccion');
const cuarta_seccion = document.querySelector('.cuarta-seccion');
const quinta_seccion = document.querySelector('.quinta-seccion');
const formulario = document.querySelector('.formulario');
const options={
    threshold:0.40
}

let visita_tercera=true;
let visita_cuarta=true;
let visita_quinta=true;
let visita_formulario=true;

// Tercera sección
const observer_tercera = new IntersectionObserver(callback_tercera, options);
function callback_tercera(entries, observer) {
    if(entries[0].isIntersecting&&visita_tercera){
        console.log('callback 1');
        let secuencia2 = gsap.timeline({});
        gsap.to('.tercera-seccion', {opacity:1,duration: 1});

        gsap.fromTo('.nuestros', {x:-100, opacity:0}, {x:0,opacity:1,duration: 1});
        gsap.fromTo('.expertos', {x:100, opacity:0}, {x:0,opacity:1,duration: 1});
        secuencia2.fromTo('.texto-tercera-seccion', {opacity:0}, {opacity:1, duration: 1});
        if (widthPantalla>768) {
            secuencia2.fromTo('.carrusel-desktop', {y:200, opacity:0}, {y:0,opacity:1, duration: 1});
        }
        if (widthPantalla<768) {
            secuencia2.fromTo('.carrusel-movile', {y:200, opacity:0}, {y:0,opacity:1, duration: 1});
        }
        visita_tercera=false;

    }
    
}
    observer_tercera.observe(tercera_seccion);
    console.log(visita_formulario);


// Cuarta sección
const observer_cuarta = new IntersectionObserver(callback_cuarta, options);
function callback_cuarta(entries, observer) {
    if(entries[0].isIntersecting&&visita_cuarta){
        console.log('callback 2');
        let secuencia3 = gsap.timeline({});
        gsap.to('.cuarta-seccion', {opacity:1,duration: 1});
        secuencia3.fromTo('.cuarta-seccion-titulo', {y:-50, opacity:0}, {y:0, opacity:1,duration: 1})
        secuencia3.fromTo('.cuarta-seccion-info-2-1', {x:-100, opacity:0 }, {x:0, opacity:1,duration: 1})
        secuencia3.fromTo('.cuarta-seccion-info-servicios', {x:100, opacity:0}, {x:0, opacity:1,duration: 1})

        visita_cuarta=false;
    }
    
}

    observer_cuarta.observe(cuarta_seccion);

// Quinta seccion
const observer_quinta = new IntersectionObserver(callback_quinta, options);
function callback_quinta(entries, observer) {
    if(entries[0].isIntersecting&&visita_quinta){
        console.log('callback 3');
        let secuencia4 = gsap.timeline({});
        gsap.to('.quinta-seccion', {opacity:1,duration: 1});
        secuencia4.fromTo('.boton-acomodar', {y:-50,x:-100, opacity:0}, {y:0, x:-5, opacity:1,duration: 1})
        secuencia4.fromTo('.boton-desacomodar', {y:-50,x:100, opacity:0}, {y:0, x:5, opacity:1,duration: 1})
        visita_quinta=false;
    }
    
}
    observer_quinta.observe(quinta_seccion);

    
// Quinta seccion
const obtserver_formulario = new IntersectionObserver(callback_formulario, options);
function callback_formulario(entries, observer) {
    if(entries[0].isIntersecting&&visita_formulario){
        console.log('callback 4');
        let secuencia5 = gsap.timeline({});
        gsap.to('.formulario', {opacity:1,duration: 1});
 
        visita_formulario=false;
    }
    
}
obtserver_formulario.observe(formulario);