let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

function adicionarNumero(numero1: number, numero2: number, devPrinter: boolean, frase: string){
    let resultado = numero1 + numero2
    if (devPrinter){
        console.log(frase + resultado)
    }
    return numero1 + numero2

}
let devPrinter = true;
let frase: string;
frase ='O valor é: '

if(button){
    button.addEventListener('click', ()=>{
        if (input1 && input2){
           console.log(adicionarNumero(Number(input1.value), Number(input2.value), devPrinter, frase));
        }
    })
}

    