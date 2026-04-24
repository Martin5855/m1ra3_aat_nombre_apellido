const textSal = document.querySelector('#textSal');
const textBon = document.querySelector('#textBon');
const textCom = document.querySelector('#textCom');
const totalGan = document.querySelector('#totalGan');
const textAh = document.querySelector('#textAh');
const textIgss = document.querySelector('#textIgss');
const textPres = document.querySelector('#textPres');
const varDesc = document.querySelector('#varDesc');
const btnSueldoLiquido = document.querySelector('#btnSueldoLiquido');
const resultadoSueldoLiquido = document.querySelector('#resultadoSueldoLiquido');
const salarioFinal = document.querySelector('#salarioFinal');



function resultado(e) {
    e.preventDefault();
    let totalGanado = Number(textSal.value) + Number(textBon.value) + Number(textCom.value);
    totalGan.value = totalGanado;
    console.log(totalGanado);
    
    let igss=Number(textSal.value) * 4.83/100;
    textIgss.value=igss;
    
    let totalDesc = Number(textAh.value) + Number(textIgss.value) + Number(textPres.value);
    varDesc.value = totalDesc;
    console.log(totalDesc);

    let sueldoLiquido = Number(totalGan.value) - Number(varDesc.value);
    console.log(sueldoLiquido);
    
    salarioFinal.value = sueldoLiquido;

    

}

// Escucha cambios en todos los inputs
btnSueldoLiquido.addEventListener('click', resultado);