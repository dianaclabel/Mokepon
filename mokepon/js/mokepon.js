function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge").checked;
  let inputCapipepo = document.getElementById("capipepo").checked;
  let inputRatigueya = document.getElementById("ratigueya").checked;

  if (inputHipodoge.checked) {
    alert("Seleccionó hipodoge ");
  } else if (inputCapipepo.checked) {
    alert("Seleccionó capipepo ");
  } else if (inputRatigueya.checked) {
    alert("Seleccionó ratigueya");
  } else {
    alert("Seleccioné una laternativa");
  }
}

//al objeto window le agregamos un escuchador donde va a disparar una funcion cuando toda nuestra pagina HTML alla cargado
window.addEventListener("load", iniciarJuego);
