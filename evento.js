const h1 = document.querySelector('h1');
const form = document.querySelector("#form")
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector("#resultado")

 form.addEventListener("submit", sumar);

function sumar(event) {
    // console.log(event);
    event.preventDefault(); 
 console.log(+input1.value * +input2.value)
     const sumaInputs = +input1.value + +input2.value;
    presult.innerText = "Resultado: " + sumaInputs;
}
