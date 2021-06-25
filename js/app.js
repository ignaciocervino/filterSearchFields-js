/** VARIABLES */
const resultado =document.querySelector('#resultado');

/** EVENTS */
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos();

    //Llena las opciones de año
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