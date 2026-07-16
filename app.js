// Variables del juego
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
const numeroMaximo = 100;

// Elementos del DOM
const titulo = document.querySelector('h1');
const parrafo = document.querySelector('.texto__parrafo');
const botonIntentar = document.querySelector('.chute.container__botones button:not(#reiniciar)');
const botonReiniciar = document.getElementById('reiniciar');
const inputUsuario = document.getElementById('valorUsuario');

function asignarTextoElemento(elemento, texto) {
    elemento.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento(parrafo, 'Ya se sortearon todos los números posibles.');
        return null;
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(inputUsuario.value);

    if (isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento(parrafo, `Por favor, ingresa un número válido entre 1 y ${numeroMaximo}.`);
        return;
    }

    intentos++;

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(titulo, '¡Felicidades!');
        asignarTextoElemento(parrafo, `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        botonReiniciar.removeAttribute('disabled');
        botonIntentar.setAttribute('disabled', 'true');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(parrafo, 'El número secreto es menor.');
        } else {
            asignarTextoElemento(parrafo, 'El número secreto es mayor.');
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    inputUsuario.value = '';
}

function condicionesIniciales() {
    asignarTextoElemento(titulo, 'Juego del Número Secreto');
    asignarTextoElemento(parrafo, `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    botonIntentar.removeAttribute('disabled');
    botonReiniciar.setAttribute('disabled', 'true');
    limpiarCaja();
}

function reiniciarJuego() {
    condicionesIniciales();
}

// Inicializar juego al cargar la página
condicionesIniciales();

// Asignar eventos
if (botonIntentar) {
    botonIntentar.addEventListener('click', verificarIntento);
}
if (botonReiniciar) {
    botonReiniciar.addEventListener('click', reiniciarJuego);
}
