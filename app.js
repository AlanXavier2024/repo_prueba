let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;

}

function verificarIntento(){
   
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numerodeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numerodeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor')
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++
        limpiarCaja()
    }

       
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado  = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', "Ya se sortearon todos los numeros posibles")
    }else
    // si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto)
    intentos= 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar numero de intentos

    condicionesIniciales()
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')

 
}

condicionesIniciales();