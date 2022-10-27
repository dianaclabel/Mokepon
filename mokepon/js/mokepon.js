function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
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
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio === 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (ataqueAleatorio === 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "ratigueya";
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//al objeto window le agregamos un escuchador donde va a disparar una funcion cuando toda nuestra pagina HTML alla cargado
window.addEventListener("load", iniciarJuego);
