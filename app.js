/* todo esta funcion se resumio en la linea de codigo 8 
let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del numero secreto";

let parrafo = document.querySelector ("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";
*/
let numeroSecreto=0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log (numeroSecreto);

function aisgnarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroUsuario =parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroUsuario===numeroSecreto){
        aisgnarTextoElemento ("p",`Acertaste el numero en ${intentos} ${(intentos==1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            aisgnarTextoElemento ("p", "El numero secreto es menor ");
        } else {
            aisgnarTextoElemento ("p", "El numero secreto es mayor ");
        }
        intentos++;      
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo) {   
       aisgnarTextoElemento ("p", "ya se sortearon todos los números posibles");
    } else {
    // si el numero generado esta incluido en a lista
        if (listaNumerosSorteados.includes(numeroGenerado) ) {
            return generarNumeroSecreto ();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;  
        }  
    }
   } 
function condicionesIniciales(){
    aisgnarTextoElemento("H1","juego del numero secreto");
    aisgnarTextoElemento("p",`indica un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar numero aleatorio 
    //inicializar el numero de intentos
    condicionesIniciales();
    //desahabilitar el boton de intentos
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();