'use strict';

function generaPalabra() {
    numeroAleatorio = +(Math.random() * (palabras.length - 1)).toFixed(0);
    console.log(numeroAleatorio);
    palabra = palabras[numeroAleatorio][0].toUpperCase();
    console.log(palabra);
};

function Id( str ){
    return document.getElementById( str );
}