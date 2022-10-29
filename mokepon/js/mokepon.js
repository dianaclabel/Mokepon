let ataqueJugador;
let ataqueEnemigo;
let resultado;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  let seleccionHecha = true;

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Seleccione una alternativa");
    seleccionHecha = false;
  }

  if (seleccionHecha) {
    seleccionarMascotaEnemigo();
  }
}

function seleccionarMascotaEnemigo() {
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  let mascotaAleatorio = aleatorio(1, 3);

  if (mascotaAleatorio === 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio === 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "Fuego";

  ataqueEnemigoAleatorio();
}

function ataqueAgua() {
  ataqueJugador = "Agua";

  ataqueEnemigoAleatorio();
}

function ataqueTierra() {
  ataqueJugador = "Tierra";

  ataqueEnemigoAleatorio();
}

function ataqueEnemigoAleatorio() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio === 1) {
    ataqueEnemigo = "Fuego";
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = "Agua";
  } else {
    ataqueEnemigo = "Tierra";
  }

  combate(ataqueJugador, ataqueEnemigo);
  crearMensaje();
}

function crearMensaje() {
  let seccionMensaje = document.getElementById("mensajes");
  let parrafo = document.createElement("P");
  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    ", la mascota del enemigo ataco con " +
    ataqueEnemigo +
    " " +
    resultado;
  seccionMensaje.appendChild(parrafo);
}

function combate(ataqueJugador, ataqueEnemigo) {
  if (ataqueJugador === ataqueEnemigo) {
    resultado = "EMPATE";
  } else if (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") {
    resultado = "Ganaste";
  } else if (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") {
    resultado = "Ganaste";
  } else if (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") {
    resultado = "Ganaste";
  } else {
    resultado = "Perdiste";
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//al objeto window le agregamos un escuchador donde va a disparar una funcion cuando toda nuestra pagina HTML alla cargado
window.addEventListener("load", iniciarJuego);
