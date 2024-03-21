"use strict";
import { palabras } from "./palabras.js";
import {
  Id,
  generaPalabra,
  pintarGuiones,
  numeroAleatorio,
  palabra,
  oculta,
  hueco,
  buttons,
} from "./funciones.js";
let intentos = 6;
const imagen = Id("imagen0");

function inicio() {
  generaPalabra();
  pintarGuiones(palabra.length);
  generaABC("a", "z");
  intentos = 6;
  if (Id("turnos")) {
    Id("turnos").innerHTML = intentos;
  }
}
// obtener una pista dentro del array de palabras
function pista() {
  Id("huecoPista").innerHTML = palabras[numeroAleatorio][1];
  setTimeout(function () {
    Id("huecoPista").innerHTML = "";
  }, 5000);
}

Id("pista").addEventListener("click", pista);

// Reseteo del juego
function handleReset() {
  imagen.src = "img/img7.png";
  location.reload();
}

// comparar la tecla pulsada con la letra oculta
function intento(letra) {
  document.getElementById(letra).disabled = true;

  if (palabra.indexOf(letra) != -1) {
    for (var i = 0; i < palabra.length; i++) {
      if (palabra[i] == letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join("");
  } else {
    intentos--;
    const source = `img/img${intentos + 1}.png`;
    imagen.src = source;
    if (Id("turnos")) {
      Id("turnos").innerHTML = intentos;
    }
  }
  compruebaFin();
}

// Iniciar
window.addEventListener("onload", inicio());


