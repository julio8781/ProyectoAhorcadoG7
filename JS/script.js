"use strict";
import {palabras} from './palabras.js'
import {Id, generarPalabras} from './funciones.js'

function pintarGuiones(num) {
    for (let i = 0; i < num; i++) {
        oculta[i] = "_";
    }
    hueco.innerHTML = oculta.join("");
}