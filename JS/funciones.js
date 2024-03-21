"use strict";
// import { palabras } from "./palabras.js";
let numeroAleatorio;
let palabra = "";
let oculta = [];
let hueco = document.getElementById("palabraOculta");
let buttons = document.getElementsByClassName("letra");
let intentos = 6;

function generaPalabra() {
	numeroAleatorio = +(Math.random() * (palabras.length - 1)).toFixed(0);
	palabra = palabras[numeroAleatorio][0].toUpperCase();
	console.log(palabra);
}

function pintarGuiones(num) {
	for (let i = 0; i < num; i++) {
		oculta[i] = "_";
	}
	hueco.innerHTML = oculta.join("");
}

function id(str) {
	return document.getElementById(str);
}

export {
	generaPalabra,
	id,
	pintarGuiones,
	numeroAleatorio,
	palabra,
	oculta,
	hueco,
	buttons,
	intentos,
};
