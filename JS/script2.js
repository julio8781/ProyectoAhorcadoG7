"use strict";

let palabras = [
	["atlantico", "Un oceano"],
	["ordenador", "Una maquina"],
	["laurel", "Un arbol"],
	["plaza", "Espacio publico"],
	["rueda", "Gran invento"],
	["cereza", "Una fruta"],
	["petanca", "Un juego"],
	["higuera", "Un arbol"],
	["everest", "Un monte"],
	["relampago", "Antecede al trueno"],
	["jirafa", "Un animal"],
	["luxemburgo", "Un pais"],
	["uruguay", "Un pais"],
	["ilustracion", "Representacion grafica"],
	["excursion", "Actividad en la naturaleza"],
	["empanadilla", "De la panaderia"],
	["pastel", "De la pasteleria"],
	["colegio", "Lugar para estudiar"],
	["carrera", "Competicion"],
	["mermelada", "Confitura"],
];
//603 x 573 = tamaño foto
// Palabra a averiguar
let palabra = "";
// Nº aleatorio
let numeroAleatorio;
// Palabra oculta
let oculta = [];
// Elemento html de la palabra
let hueco = document.getElementById("palabraOculta");
// Botones de letras
let buttons = document.getElementsByClassName("letra");

let intentos = 6;

const imagen = id("imagen0");

function id(str) {
	return document.getElementById(str);
}

const elementoÑ = String.fromCharCode(209).toUpperCase();

// Escoger palabra al azar
function generaPalabra() {
	numeroAleatorio = +(Math.random() * (palabras.length - 1)).toFixed(0);
	console.log(numeroAleatorio);
	palabra = palabras[numeroAleatorio][0].toUpperCase();
	console.log(palabra);
}

function pintarGuiones(num) {
	for (let i = 0; i < num; i++) {
		oculta[i] = "_";
	}
	hueco.innerHTML = oculta.join("");
}

// Generar teclado
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

// Resertear el juego
function handleReset() {
	imagen.src = "img/muñeco tiza/img7.png";
	location.reload();
}

// Comprobar si se ha completado la palabra o no y avisar al usuario con un mensaje
function compruebaFin() {
	if (oculta.indexOf("_") == -1) {
		id("msg-final").innerHTML = "Felicidades !!";
		id("msg-final").className += "zoom-in";
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
