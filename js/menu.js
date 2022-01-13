// MENU PRINCIPAL
const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('mostrar')
});

//-----------------------SUBMENU MUJERES-------------------------------------------
const btnMujeres = document.querySelector('#btn-mujeres');
const ulMujeres = document.querySelector('.ul-responsive__mujeres');

btnMujeres.addEventListener('click',(e)=>{
    ulMujeres.classList.toggle('mostrar');
    e.stopPropagation();
});
ulMujeres.addEventListener('click', (e)=>{
    e.stopPropagation();
});

// SUBMENU MODA MUJERES
const btnModaMujeres = document.querySelector('#btn-moda-mujeres');
const mujeresModa = document.querySelector('.ul-mujeres__moda-mujeres');

btnModaMujeres.addEventListener('click',(e)=>{
    mujeresModa.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresModa.addEventListener('click',(e)=>{
    e.stopPropagation();
});


// SUBMENU MODA JUVENIL MUJERES
const btnMujeresModaJuvenil = document.querySelector('#btn-mujeres-moda-juvenil');
const mujeresModaJuvenil = document.querySelector('.ul-mujeres__moda-juvenil');

btnMujeresModaJuvenil.addEventListener('click',(e)=>{
    mujeresModaJuvenil.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresModaJuvenil.addEventListener('click',(e)=>{
    e.stopPropagation();
});

//SUBMENU MUJERES ACCESORIOS
const btnMujeresAccesorios = document.querySelector('#btn-mujeres-accesorios');
const mujeresAccesorios = document.querySelector('.ul-mujeres__accesorios');

btnMujeresAccesorios.addEventListener('click',(e)=>{
    mujeresAccesorios.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresAccesorios.addEventListener('click',(e)=>{
    e.stopPropagation();
});

//SUBMENU MUJERES ZAPATOS
const btnMujeresZapatos = document.querySelector('#btn-mujeres-zapatos');
const mujeresZapatos = document.querySelector('.ul-mujeres__zapatos');

btnMujeresZapatos.addEventListener('click',(e)=>{
    mujeresZapatos.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresZapatos.addEventListener('click',(e)=>{
    e.stopPropagation();
});

//SUBMENU MUJERES CARTERAS
const btnMujeresCarteras = document.querySelector('#btn-mujeres-carteras');
const mujeresCarteras = document.querySelector('.ul-mujeres__carteras');

btnMujeresCarteras.addEventListener('click',(e)=>{
    mujeresCarteras.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresCarteras.addEventListener('click',(e)=>{
    e.stopPropagation();
});

//SUBMENU MUJERES PIJAMAS
const btnMujeresPijamas = document.querySelector('#btn-mujeres-pijamas');
const mujeresPijamas = document.querySelector('.ul-mujeres__pijamas');

btnMujeresPijamas.addEventListener('click',(e)=>{
    mujeresPijamas.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresPijamas.addEventListener('click',(e)=>{
    e.stopPropagation();
});

//SUBMENU MUJERES COLECCION
const btnMujeresColeccion = document.querySelector('#btn-mujeres-coleccion');
const mujeresColeccion = document.querySelector('.ul-mujeres__colecciones');

btnMujeresColeccion.addEventListener('click',(e)=>{
    mujeresColeccion.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresColeccion.addEventListener('click',(e)=>{
    e.stopPropagation();
});

//SUBMENU MUJERES TENDENCIA
const btnMujeresTendencia = document.querySelector('#btn-mujeres-tendencia');
const mujeresTendencia = document.querySelector('.ul-mujeres__tendencias');

btnMujeresTendencia.addEventListener('click',(e)=>{
    mujeresTendencia.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresTendencia.addEventListener('click',(e)=>{
    e.stopPropagation();
});

//SUBMENU MUJERES MARCAS
const btnMujeresMarcas = document.querySelector('#btn-mujeres-marcas');
const mujeresMarcas = document.querySelector('.ul-mujeres__marcas');

btnMujeresMarcas.addEventListener('click',(e)=>{
    mujeresMarcas.classList.toggle('mostrar');
    e.stopPropagation();
});

mujeresMarcas.addEventListener('click',(e)=>{
    e.stopPropagation();
});



//-----------------------SUBMENU HOMBRES-------------------------------------------
const btnHombres = document.querySelector('#btn-hombres');
const ulHombres = document.querySelector('.ul-responsive__hombres');

btnHombres.addEventListener('click',(e)=>{
    ulHombres.classList.toggle('mostrar');
    e.stopPropagation();
});
ulHombres.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOMBRES MODA
const btnModaHombres = document.querySelector('#btn-moda-hombres');
const modaHombres = document.querySelector('.ul-hombres__moda-hombres');

btnModaHombres.addEventListener('click',(e)=>{
    modaHombres.classList.toggle('mostrar');
    e.stopPropagation();
});
modaHombres.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOMBRES MODA JUVENIL
const btnHombresModaJuvenil = document.querySelector('#btn-hombres-moda-juvenil');
const hombresModaJuvenil = document.querySelector('.ul-hombres__moda-juvenil');

btnHombresModaJuvenil.addEventListener('click',(e)=>{
    hombresModaJuvenil.classList.toggle('mostrar');
    e.stopPropagation();
});
hombresModaJuvenil.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOMBRES ZAPATOS
const btnHombresZapatos = document.querySelector('#btn-hombres-zapatos');
const hombresZapatos = document.querySelector('.ul-hombres__zapatos');

btnHombresZapatos.addEventListener('click',(e)=>{
    hombresZapatos.classList.toggle('mostrar');
    e.stopPropagation();
});
hombresZapatos.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOMBRES ACCESORIOS
const btnHombresAccesorios = document.querySelector('#btn-hombres-accesorios');
const hombresAccesorios = document.querySelector('.ul-hombres__accesorios');

btnHombresAccesorios.addEventListener('click',(e)=>{
    hombresAccesorios.classList.toggle('mostrar');
    e.stopPropagation();
});
hombresAccesorios.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOMBRES ROPA INTERIOR
const btnHombresInteriores = document.querySelector('#btn-hombres-interiores');
const hombresInteriores = document.querySelector('.ul-hombres__ropa-interior');

btnHombresInteriores.addEventListener('click',(e)=>{
    hombresInteriores.classList.toggle('mostrar');
    e.stopPropagation();
});
hombresInteriores.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOMBRES COLECCIONES
const btnHombresColecciones = document.querySelector('#btn-hombres-colecciones');
const hombresColecciones = document.querySelector('.ul-hombres__colecciones');

btnHombresColecciones.addEventListener('click',(e)=>{
    hombresColecciones.classList.toggle('mostrar');
    e.stopPropagation();
});
hombresColecciones.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOMBRES TENDENCIAS
const btnHombresTendencias = document.querySelector('#btn-hombres-tendencias');
const hombresTendencias = document.querySelector('.ul-hombres__tendencias');

btnHombresTendencias.addEventListener('click',(e)=>{
    hombresTendencias.classList.toggle('mostrar');
    e.stopPropagation();
});
hombresTendencias.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOMBRES MARCAS
const btnHombresMarcas = document.querySelector('#btn-hombres-marcas');
const hombresMarcas = document.querySelector('.ul-hombres__marcas');

btnHombresMarcas.addEventListener('click',(e)=>{
    hombresMarcas.classList.toggle('mostrar');
    e.stopPropagation();
});
hombresMarcas.addEventListener('click', (e)=>{
    e.stopPropagation();
});



//-----------------------SUBMENU NIÑOS-------------------------------------------
const btnChildren = document.querySelector('#btn-children');
const ulChildren = document.querySelector('.ul-responsive__children');

btnChildren.addEventListener('click',(e)=>{
    ulChildren.classList.toggle('mostrar');
    e.stopPropagation();
});
ulChildren.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑOS MUNDO
const btnChildrenMundo = document.querySelector('#btn-children-mundo');
const childrenMundo = document.querySelector('.ul-children__mundo-bebes');

btnChildrenMundo.addEventListener('click',(e)=>{
    childrenMundo.classList.toggle('mostrar');
    e.stopPropagation();
});
childrenMundo.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑAS 1A3
const btnGirls1a3 = document.querySelector('#btn-children-girls1a3');
const girls1a3 = document.querySelector('.ul-children__girls-1a3');

btnGirls1a3.addEventListener('click',(e)=>{
    girls1a3.classList.toggle('mostrar');
    e.stopPropagation();
});
girls1a3.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑ0S 1A3
const btnKids1a3 = document.querySelector('#btn-children-kids1a3');
const kids1a3 = document.querySelector('.ul-children__kids-1a3');

btnKids1a3.addEventListener('click',(e)=>{
    kids1a3.classList.toggle('mostrar');
    e.stopPropagation();
});
kids1a3.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑAS 4A7
const btnGirls4a7 = document.querySelector('#btn-children-girls4a7');
const girls4a7 = document.querySelector('.ul-children__girls-4a7');

btnGirls4a7.addEventListener('click',(e)=>{
    girls4a7.classList.toggle('mostrar');
    e.stopPropagation();
});
girls4a7.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑOS 4A7
const btnKids4a7 = document.querySelector('#btn-children-kids4a7');
const kids4a7 = document.querySelector('.ul-children__kids-4a7');

btnKids4a7.addEventListener('click',(e)=>{
    kids4a7.classList.toggle('mostrar');
    e.stopPropagation();
});
kids4a7.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑAS 8A14
const btnGirls8a14 = document.querySelector('#btn-children-girls8a14');
const girls8a14 = document.querySelector('.ul-children__girls-8a14');

btnGirls8a14.addEventListener('click',(e)=>{
    girls8a14.classList.toggle('mostrar');
    e.stopPropagation();
});
girls8a14.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑOS 8A14
const btnKids8a14 = document.querySelector('#btn-children-kids8a14');
const kids8a14 = document.querySelector('.ul-children__kids-8a14');

btnKids8a14.addEventListener('click',(e)=>{
    kids8a14.classList.toggle('mostrar');
    e.stopPropagation();
});
kids8a14.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑOS ZAPATOS
const btnChildrenZapatos = document.querySelector('#btn-children-zapatos');
const childrenZapatos = document.querySelector('.ul-children__zapatos');

btnChildrenZapatos.addEventListener('click',(e)=>{
    childrenZapatos.classList.toggle('mostrar');
    e.stopPropagation();
});
childrenZapatos.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑOS ACCESORIOS
const btnChildrenAccesorios = document.querySelector('#btn-children-accesorios');
const childrenAccesorios = document.querySelector('.ul-children__accesorios');

btnChildrenAccesorios.addEventListener('click',(e)=>{
    childrenAccesorios.classList.toggle('mostrar');
    e.stopPropagation();
});
childrenAccesorios.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑOS COLECCIONES
const btnChildrenColeccion = document.querySelector('#btn-children-coleccion');
const childrenColeccion = document.querySelector('.ul-children__colecciones');

btnChildrenColeccion.addEventListener('click',(e)=>{
    childrenColeccion.classList.toggle('mostrar');
    e.stopPropagation();
});
childrenColeccion.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑOS TENDENCIAS
const btnChildrenTendencia = document.querySelector('#btn-children-tendencia');
const childrenTendencia = document.querySelector('.ul-children__tendencias');

btnChildrenTendencia.addEventListener('click',(e)=>{
    childrenTendencia.classList.toggle('mostrar');
    e.stopPropagation();
});
childrenTendencia.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU NIÑOS MARCAS
const btnChildrenMarcas = document.querySelector('#btn-children-marcas');
const childrenMarcas = document.querySelector('.ul-children__marcas');

btnChildrenMarcas.addEventListener('click',(e)=>{
    childrenMarcas.classList.toggle('mostrar');
    e.stopPropagation();
});
childrenMarcas.addEventListener('click', (e)=>{
    e.stopPropagation();
});



//-----------------------SUBMENU BELLEZA-------------------------------------------
const btnBelleza = document.querySelector('#btn-belleza');
const ulBelleza = document.querySelector('.ul-responsive__belleza');

btnBelleza.addEventListener('click',(e)=>{
    ulBelleza.classList.toggle('mostrar');
    e.stopPropagation();
});
ulBelleza.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU BELLEZA PERFUMERÍA
const btnBellezaPerfume = document.querySelector('#btn-belleza-perfumeria');
const bellezaPerfume = document.querySelector('.ul-belleza__perfumeria');

btnBellezaPerfume.addEventListener('click',(e)=>{
    bellezaPerfume.classList.toggle('mostrar');
    e.stopPropagation();
});
bellezaPerfume.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU BELLEZA MAQUILLAJE
const btnBellezaMaquillaje = document.querySelector('#btn-belleza-maquillaje');
const bellezaMaquillaje = document.querySelector('.ul-belleza__maquillaje');

btnBellezaMaquillaje.addEventListener('click',(e)=>{
    bellezaMaquillaje.classList.toggle('mostrar');
    e.stopPropagation();
});
bellezaMaquillaje.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU BELLEZA FACIAL
const btnBellezaFacial = document.querySelector('#btn-belleza-facial');
const bellezaFacial = document.querySelector('.ul-belleza__cuidado-facial');

btnBellezaFacial.addEventListener('click',(e)=>{
    bellezaFacial.classList.toggle('mostrar');
    e.stopPropagation();
});
bellezaFacial.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU BELLEZA CAPILAR
const btnBellezaCapilar = document.querySelector('#btn-belleza-capilar');
const bellezaCapilar = document.querySelector('.ul-belleza__cuidado-capilar');

btnBellezaCapilar.addEventListener('click',(e)=>{
    bellezaCapilar.classList.toggle('mostrar');
    e.stopPropagation();
});
bellezaCapilar.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU BELLEZA CORPORAL
const btnBellezaCorporal = document.querySelector('#btn-belleza-corporal');
const bellezaCorporal = document.querySelector('.ul-belleza__cuidado-corporal');

btnBellezaCorporal.addEventListener('click',(e)=>{
    bellezaCorporal.classList.toggle('mostrar');
    e.stopPropagation();
});
bellezaCorporal.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU BELLEZA MASCULINO
const btnBellezaMasculino = document.querySelector('#btn-belleza-masculino');
const bellezaMasculino = document.querySelector('.ul-belleza__cuidado-masculino');

btnBellezaMasculino.addEventListener('click',(e)=>{
    bellezaMasculino.classList.toggle('mostrar');
    e.stopPropagation();
});
bellezaMasculino.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU BELLEZA INFANTIL 
const btnBellezaInfantil = document.querySelector('#btn-belleza-infantil');
const bellezaInfantil = document.querySelector('.ul-belleza__infantil');

btnBellezaInfantil.addEventListener('click',(e)=>{
    bellezaInfantil.classList.toggle('mostrar');
    e.stopPropagation();
});
bellezaInfantil.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU BELLEZA MARCAS 
const btnBellezaMarcas = document.querySelector('#btn-belleza-marcas');
const bellezaMarcas = document.querySelector('.ul-belleza__marcas');

btnBellezaMarcas.addEventListener('click',(e)=>{
    bellezaMarcas.classList.toggle('mostrar');
    e.stopPropagation();
});
bellezaMarcas.addEventListener('click', (e)=>{
    e.stopPropagation();
});



//-----------------------SUBMENU HOGAR-------------------------------------------
const btnHogar = document.querySelector('#btn-hogar');
const ulHogar = document.querySelector('.ul-responsive__hogar');

btnHogar.addEventListener('click',(e)=>{
    ulHogar.classList.toggle('mostrar');
    e.stopPropagation();
});
ulHogar.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR BOUTIQUE 
const btnHogarBoutique = document.querySelector('#btn-hogar-boutique');
const hogarBoutique = document.querySelector('.ul-hogar__boutique');

btnHogarBoutique.addEventListener('click',(e)=>{
    hogarBoutique.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarBoutique.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR ELECTROHOGAR 
const btnHogarElectro = document.querySelector('#btn-hogar-electrohogar');
const hogarElectro = document.querySelector('.ul-hogar__electrohogar');

btnHogarElectro.addEventListener('click',(e)=>{
    hogarElectro.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarElectro.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR DORMITORIO 
const btnHogarDormitorio = document.querySelector('#btn-hogar-dormitorio');
const hogarDormitorio = document.querySelector('.ul-hogar__dormitorio');

btnHogarDormitorio.addEventListener('click',(e)=>{
    hogarDormitorio.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarDormitorio.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR DECORACION 
const btnHogarDecoracion = document.querySelector('#btn-hogar-decoracion');
const hogarDecoracion = document.querySelector('.ul-hogar__decoracion');

btnHogarDecoracion.addEventListener('click',(e)=>{
    hogarDecoracion.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarDecoracion.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR COCINA 
const btnHogarCocina = document.querySelector('#btn-hogar-cocina');
const hogarCocina = document.querySelector('.ul-hogar__cocina');

btnHogarCocina.addEventListener('click',(e)=>{
    hogarCocina.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarCocina.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR ELECTROMENOR 
const btnHogarElectromenor = document.querySelector('#btn-hogar-electromenor');
const hogarElectromenor = document.querySelector('.ul-hogar__electromenor');

btnHogarElectromenor.addEventListener('click',(e)=>{
    hogarElectromenor.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarElectromenor.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR MESA 
const btnHogarMesa = document.querySelector('#btn-hogar-mesa');
const hogarMesa = document.querySelector('.ul-hogar__mesa-bebida');

btnHogarMesa.addEventListener('click',(e)=>{
    hogarMesa.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarMesa.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR BATHROOM 
const btnHogarBathroom = document.querySelector('#btn-hogar-bathroom');
const hogarBathroom = document.querySelector('.ul-hogar__baño');

btnHogarBathroom.addEventListener('click',(e)=>{
    hogarBathroom.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarBathroom.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR ORGANIZACION
const btnHogarOrganizacion = document.querySelector('#btn-hogar-organizacion');
const hogarOrganizacion = document.querySelector('.ul-hogar__organizacion-muebles');

btnHogarOrganizacion.addEventListener('click',(e)=>{
    hogarOrganizacion.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarOrganizacion.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR TENDENCIA
const btnHogarTendencia = document.querySelector('#btn-hogar-tendencia');
const hogarTendencia = document.querySelector('.ul-hogar__tendencias');

btnHogarTendencia.addEventListener('click',(e)=>{
    hogarTendencia.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarTendencia.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU HOGAR MARCA
const btnHogarMarca = document.querySelector('#btn-hogar-marca');
const hogarMarca = document.querySelector('.ul-hogar__marcas');

btnHogarMarca.addEventListener('click',(e)=>{
    hogarMarca.classList.toggle('mostrar');
    e.stopPropagation();
});
hogarMarca.addEventListener('click', (e)=>{
    e.stopPropagation();
});



//-----------------------SUBMENU TECNOLOGÍA-------------------------------------------
const btnTecnologia = document.querySelector('#btn-tecnologia');
const ulTecnologia = document.querySelector('.ul-responsive__tecnologia');

btnTecnologia.addEventListener('click',(e)=>{
    ulTecnologia.classList.toggle('mostrar');
    e.stopPropagation();
});
ulTecnologia.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA TV Y VIDEO
const btnTecnologiaTV = document.querySelector('#btn-tecnologia-tv');
const tecnologiaTV = document.querySelector('.ul-tecnologia__tv-video');

btnTecnologiaTV.addEventListener('click',(e)=>{
    tecnologiaTV.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaTV.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA AUDIO
const btnTecnologiaAudio = document.querySelector('#btn-tecnologia-audio');
const tecnologiaAudio = document.querySelector('.ul-tecnologia__audio');

btnTecnologiaAudio.addEventListener('click',(e)=>{
    tecnologiaAudio.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaAudio.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA CELULAR
const btnTecnologiaCelular = document.querySelector('#btn-tecnologia-celular');
const tecnologiaCelular = document.querySelector('.ul-tecnologia__celulares');

btnTecnologiaCelular.addEventListener('click',(e)=>{
    tecnologiaCelular.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaCelular.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA COMPUTACIÓN
const btnTecnologiaComputacion = document.querySelector('#btn-tecnologia-computacion');
const tecnologiaComputacion = document.querySelector('.ul-tecnologia__computacion');

btnTecnologiaComputacion.addEventListener('click',(e)=>{
    tecnologiaComputacion.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaComputacion.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA ACCESORIOS
const btnTecnologiaAccesorios = document.querySelector('#btn-tecnologia-accesorios');
const tecnologiaAccesorios = document.querySelector('.ul-tecnologia__accesorios');

btnTecnologiaAccesorios.addEventListener('click',(e)=>{
    tecnologiaAccesorios.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaAccesorios.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA HOGAR
const btnTecnologiaHogar = document.querySelector('#btn-tecnologia-hogar');
const tecnologiaHogar = document.querySelector('.ul-tecnologia__hogar-inteligente');

btnTecnologiaHogar.addEventListener('click',(e)=>{
    tecnologiaHogar.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaHogar.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA UNIDAD
const btnTecnologiaUnidad = document.querySelector('#btn-tecnologia-unidad');
const tecnologiaUnidad = document.querySelector('.ul-tecnologia__uni-almacenamiento');

btnTecnologiaUnidad.addEventListener('click',(e)=>{
    tecnologiaUnidad.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaUnidad.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA MARCA
const btnTecnologiaMarca = document.querySelector('#btn-tecnologia-marca');
const tecnologiaMarca = document.querySelector('.ul-tecnologia__marcas');

btnTecnologiaMarca.addEventListener('click',(e)=>{
    tecnologiaMarca.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaMarca.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU TECNOLOGÍA COLECCION
const btnTecnologiaColeccion = document.querySelector('#btn-tecnologia-coleccion');
const tecnologiaColeccion = document.querySelector('.ul-tecnologia__colecciones');

btnTecnologiaColeccion.addEventListener('click',(e)=>{
    tecnologiaColeccion.classList.toggle('mostrar');
    e.stopPropagation();
});
tecnologiaColeccion.addEventListener('click', (e)=>{
    e.stopPropagation();
});


//-----------------------SUBMENU DEPORTE Y RECREACIÓN-------------------------------------------
const btnDeporte = document.querySelector('#btn-deporte');
const ulDeporte = document.querySelector('.ul-responsive__deportes');

btnDeporte.addEventListener('click',(e)=>{
    ulDeporte.classList.toggle('mostrar');
    e.stopPropagation();
});
ulDeporte.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU DEPORTE Y RECREACIÓN MUNDO
const btnDeporteMundo = document.querySelector('#btn-deporte-mundo');
const deporteMundo = document.querySelector('.ul-deportes__mundo-fitness');

btnDeporteMundo.addEventListener('click',(e)=>{
    deporteMundo.classList.toggle('mostrar');
    e.stopPropagation();
});
deporteMundo.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU DEPORTE Y RECREACIÓN ROPA DEPORTIVA
const btnDeporteRopa = document.querySelector('#btn-deporte-ropa');
const deporteRopa = document.querySelector('.ul-deportes__ropa-deportiva');

btnDeporteRopa.addEventListener('click',(e)=>{
    deporteRopa.classList.toggle('mostrar');
    e.stopPropagation();
});
deporteRopa.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//SUBMENU DEPORTE Y RECREACIÓN MARCAS
const btnDeporteMarca = document.querySelector('#btn-deporte-marca');
const deporteMarca = document.querySelector('.ul-deportes__marcas');

btnDeporteMarca.addEventListener('click',(e)=>{
    deporteMarca.classList.toggle('mostrar');
    e.stopPropagation();
});
deporteMarca.addEventListener('click', (e)=>{
    e.stopPropagation();
});
