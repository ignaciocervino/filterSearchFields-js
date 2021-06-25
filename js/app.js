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
    mostrarAutos();

    //Llena las opciones de año
    llenarSelect();
});
//Event Listener para los select de busqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
});
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
});


/** FUNCTIONS */
function mostrarAutos(){
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
    const resultado = autos.filter(filtrarMarca);// funcion de alto nivel
    console.log(resultado);
}
//Solo filtra por marca 
function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){//Si no esta vacia
        return auto.marca === datosBusqueda.marca;
    }
    return auto;//Si no selecciona nada retorno el auto completo
}