let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = ["💗", "💗", "💗"];
let vidasEnemigo = ["💗", "💗", "💗"];

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
    agregarImagenJugador("./assets/imagen/imagen-2.png");
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
    agregarImagenJugador("./assets/imagen/imagen-3.com.png");
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
    agregarImagenJugador("assets/imagen/imagen-1.png");
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

    let setcionFooter = document.getElementById("footer");
    setcionFooter.style.position = "sticky";

    seleccionarMascotaEnemigo();
  }
}

function seleccionarMascotaEnemigo() {
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  let mascotaAleatorio = aleatorio(1, 3);

  if (mascotaAleatorio === 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
    agregarImagenEnemigo("./assets/imagen/imagen-2.png");
  } else if (mascotaAleatorio === 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
    agregarImagenEnemigo("./assets/imagen/imagen-3.com.png");
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
    agregarImagenEnemigo("assets/imagen/imagen-1.png");
  }
}

function agregarImagenJugador(nombreImagen) {
  let contenedorImagen = document.getElementById("contenedor-imagen-jugador");
  let imagen = document.createElement("img");
  imagen.src = nombreImagen;
  imagen.classList.add("imagen__seleccionado");
  contenedorImagen.appendChild(imagen);
}

function agregarImagenEnemigo(nombreImagen) {
  let contenedorImagen = document.getElementById("contenedor-imagen-enemigo");
  let imagen = document.createElement("img");
  imagen.src = nombreImagen;
  imagen.classList.add("imagen__seleccionado");
  contenedorImagen.appendChild(imagen);
}

function ataqueFuego() {
  ataqueJugador = "Rayos de sol 🌞";

  ataqueEnemigoAleatorio();
}

function ataqueAgua() {
  ataqueJugador = "Gotas de lluvia 💦";

  ataqueEnemigoAleatorio();
}

function ataqueTierra() {
  ataqueJugador = "Tormenta de arena 🌪";

  ataqueEnemigoAleatorio();
}

function ataqueEnemigoAleatorio() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio === 1) {
    ataqueEnemigo = "Rayos de sol 🌞";
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = "Gotas de lluvia 💦";
  } else {
    ataqueEnemigo = "Tormenta de arena 🌪";
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
  } else if (
    ataqueJugador === "Rayos de sol 🌞" &&
    ataqueEnemigo === "Tormenta de arena 🌪"
  ) {
    crearMensaje("GANASTE😃");
    vidasEnemigo.pop();
    spanVidasEnemigo.innerHTML = vidasEnemigo.join(" ");
  } else if (
    ataqueJugador === "Gotas de lluvia 💦" &&
    ataqueEnemigo === "Rayos de sol 🌞"
  ) {
    crearMensaje("GANASTE😃");
    vidasEnemigo.pop();
    spanVidasEnemigo.innerHTML = vidasEnemigo.join(" ");
  } else if (
    ataqueJugador === "Tormenta de arena 🌪" &&
    ataqueEnemigo === "Gotas de lluvia 💦"
  ) {
    crearMensaje("GANASTE😃");
    vidasEnemigo.pop();
    spanVidasEnemigo.innerHTML = vidasEnemigo.join(" ");
  } else {
    crearMensaje("PERDISTE😣");
    vidasJugador.pop();
    spanVidasJugador.innerHTML = vidasJugador.join(" ");
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo.length == 0) {
    crearMensajeFinal("¡FELICITACIONES GANASTE🎉!");
  } else if (vidasJugador.length == 0) {
    crearMensajeFinal("Lo siento, perdiste 😥");
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
