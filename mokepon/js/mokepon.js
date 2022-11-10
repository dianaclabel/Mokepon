let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let setcionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  setcionSeleccionarAtaque.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let btnReiniciar = document.getElementById("boton-reiniciar");
  btnReiniciar.style.display = "none";
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
    alert("Debe seleccionar una alternativa");
    seleccionHecha = false;
  }

  if (seleccionHecha) {
    let setcionSeleccionarMascota = document.getElementById(
      "seleccionar-mascota"
    );
    setcionSeleccionarMascota.style.display = "none";

    let setcionSeleccionarAtaque =
      document.getElementById("seleccionar-ataque");
    setcionSeleccionarAtaque.style.display = "flex";

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
}

function crearMensaje(mensaje) {
  let seccionMensaje = document.getElementById("resultado");
  let ataqueDelJugador = document.getElementById("ataque-del-jugador");
  let ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");

  let nuevoAtaqueDelJugador = document.createElement("P");
  let nuevoAtaqueDelEnemigo = document.createElement("P");

  seccionMensaje.innerHTML = mensaje;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function combate(ataqueJugador, ataqueEnemigo) {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueJugador === ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento, perdiste :(");
  }
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("resultado");

  sectionMensajes.innerHTML = resultadoFinal;

  //disabled hara que los botones no hagan la funcion se bloqueara y pondra los botones transparente

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let btnReiniciar = document.getElementById("boton-reiniciar");

  btnReiniciar.style.display = "block";
  btnReiniciar.addEventListener("click", reiniciar);
}

function reiniciar() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//al objeto window le agregamos un escuchador donde va a disparar una funcion cuando toda nuestra pagina HTML alla cargado
window.addEventListener("load", iniciarJuego);
