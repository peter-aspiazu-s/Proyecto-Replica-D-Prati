'use strict'

const carruselGrande = document.querySelector('.main-carrusel__grande');
const carruselEnlace = document.querySelectorAll('.enlace');

carruselEnlace.forEach( ( cadaEnlace , i )=> {
    carruselEnlace[i].addEventListener('click', ()=>{
        let posicion = i;
        let operacion = posicion * -20;

        carruselGrande.style.transform = `translateX(${ operacion }%)`;

        carruselEnlace.forEach( ( cadaEnlace, i )=>{
            carruselEnlace[i].classList.remove('activo')
        })
        carruselEnlace[i].classList.add('activo')
    })
} )


// ( condicion ) ? 'hola' : 'adiós'