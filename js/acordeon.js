const btnAcordeon = document.querySelector('.servicio-cliente__container');
const divAcordeon = document.querySelector('.servicio-cliente__acordeon');

btnAcordeon.addEventListener('click', ()=>{
    divAcordeon.classList.toggle('mostrar__acordeon');
});