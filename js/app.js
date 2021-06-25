/** VARIABLES */
const resultado =document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max-10;//We set a minimun of year date


/** EVENTS */
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos();

    //Llena las opciones de año
    llenarSelect();
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
