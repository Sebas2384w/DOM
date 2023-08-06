const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#valor1');
const input2 = document.querySelector('#valor2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event) {

    /*console.log({even}); */
    /* event.preventDefault(); */
    const sumaInputs = input1.value + input2.value;
    resultado.innerHTML = "Resultado:" + sumaInputs;
}


