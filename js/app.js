/** VARIABLES */
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado =document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max-10;//We set a minimun of year date

//Generar un objeto con la busqueda
const datosBusqueda={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',

}


/** EVENTS */
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);

    //Llena las opciones de año
    llenarSelect();
});
//Event Listener para los select de busqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
});
maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
});
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


/** FUNCTIONS */
function mostrarAutos(autos){
    limpiarHTML();//Elimina los reultados previos
    autos.forEach(auto =>{
        const {marca,modelo, year, puertas, transmision, precio, color} = auto;//Aplico distructuring
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: $${precio} USD - Color: ${color}
        `;
        //Insertar en el html
        resultado.appendChild(autoHTML);
    });
}

//Limpiar HTMLO
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
        
    }
}

//Funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);// funcion de alto nivel - soportan chainlink
    //console.log(resultado);
    if (resultado.length) {
        mostrarAutos(resultado);
    }
    else{
        noResultado();
    }
    
}

//Mostra texto cuando no hubo resultado
function noResultado(){
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultado. Intenta otra vez.';
    resultado.appendChild(noResultado);
}

//Solo filtra por marca 
function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){//Si no esta vacia
        return auto.marca === marca;
    }
    return auto;//Si no selecciona nada retorno el auto completo
}

//Solo filtra año
function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){//Si no esta vacia
        return auto.year === year;
    }
    return auto;//Si no selecciona nada retorno el auto completo
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){//Si no esta vacia
        return auto.precio >= minimo;
    }
    return auto;//Si no selecciona nada retorno el auto completo
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){//Si no esta vacia
        return auto.precio <= maximo;
    }
    return auto;//Si no selecciona nada retorno el auto completo
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){//Si no esta vacia
        return auto.puertas === puertas;
    }
    return auto;//Si no selecciona nada retorno el auto completo
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){//Si no esta vacia
        return auto.transmision === transmision;
    }
    return auto;//Si no selecciona nada retorno el auto completo
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){//Si no esta vacia
        return auto.color === color;
    }
    return auto;//Si no selecciona nada retorno el auto completo
}