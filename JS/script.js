"use strict";
import { palabras } from "./palabras.js";
import {
	id,
	generaPalabra,
	pintarGuiones,
	numeroAleatorio,
	palabra,
	oculta,
	hueco,
	buttons,
} from "./funciones.js";
let intentos = 6;
const imagen = id("imagen0");

function generaABC(a, z) {
	document.getElementById("abcdario").innerHTML = "";
	var i = a.charCodeAt(0),
		j = z.charCodeAt(0);
	var letra = "";
	for (; i <= j; i++) {
		letra = String.fromCharCode(i).toUpperCase();
		id(
			"abcdario"
		).innerHTML += `<button value='${letra}' onclick='intento("${letra}")' class='letra' id='${letra}'> ${letra} </button>`;
		if (i == 110) {
			id(
				"abcdario"
			).innerHTML += `<button value='${elementoÑ}' onclick='intento("${elementoÑ}")' class='letra' id='${elementoÑ}'> ${elementoÑ} </button>`;
		}
	}
}

// Reseteo del juego
function handleReset() {
	imagen.src = "img/img7.png";
	location.reload();
}

function compruebaFin() {
	if (oculta.indexOf("_") == -1) {
		id("msg-final").innerHTML = "Felicidades !!";
		id("msg-final").className += "zoom-in";
		// Si queremos encuadrar la palabra
		// elementoPalabra.className += " encuadre";
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].disabled = true;
		}
		id("comenzarJuego").innerHTML = "Empezar";
		id("comenzarJuego").addEventListener("click", handleReset);
	} else if (intentos == 0) {
		id("msg-final").innerHTML = "Game Over";
		id("msg-final").className += "zoom-in";
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].disabled = true;
		}
		id("comenzarJuego").innerHTML = "Empezar";
		id("comenzarJuego").addEventListener("click", handleReset);
	}
}

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
		if (id("turnos")) {
			id("turnos").innerHTML = intentos;
		}
	}
	compruebaFin();
}

// obtener una pista dentro del array de palabras
function pista() {
	id("huecoPista").innerHTML = palabras[numeroAleatorio][1];
	setTimeout(function () {
		id("huecoPista").innerHTML = "";
	}, 5000);
}

id("pista").addEventListener("click", pista);

function inicio() {
	generaPalabra();
	pintarGuiones(palabra.length);
	generaABC("a", "z");
	intentos = 6;
	if (id("turnos")) {
		id("turnos").innerHTML = intentos;
	}
}

// Iniciar
window.addEventListener("onload", inicio());
