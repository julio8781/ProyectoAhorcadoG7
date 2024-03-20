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

function inicio() {
	generaPalabra();
	pintarGuiones(palabra.length);
	generaABC("a", "z");
	intentos = 6;
	if (Id("turnos")) {
		Id("turnos").innerHTML = intentos;
	}
}

function pista() {
	Id("huecoPista").innerHTML = palabras[numeroAleatorio][1];
	setTimeout(function () {
		Id("huecoPista").innerHTML = "";
	}, 5000);
}

Id("pista").addEventListener("click", pista);

// Iniciar
window.addEventListener("onload", inicio());

/*
1.- CSS modo responsive y comentario hoja style
2.- Como implementar paneles
3.- Como podemos usar una API con acentos (comparar palabras con acentos con una sin acento) "¿simular API?"
*/
