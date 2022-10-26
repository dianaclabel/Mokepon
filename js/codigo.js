function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel 🧻";
  } else if (jugada == 3) {
    resultado = "Tijera ✂";
  } else {
    alert("Mal elegido");
  }
  return resultado;
}

function combate(pc, jugador) {
  //COMBATE
  if (pc == jugador) {
    alert("EMPATE");
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE");
    triunfos++;
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE");
    triunfos++;
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE");
    triunfos++;
  } else {
    alert("PERDISTE");
    perdidas++;
  }
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let min = 1;
let max = 3;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(min, max);
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
  //alert ("Elegiste " +jugador)

  alert("PC elige: " + eleccion(pc));
  alert("Tu eliges: " + eleccion(jugador));

  combate(pc, jugador);
}

alert("Ganaste " + triunfos + "veces. Perdiste " + perdidas + " veces.");
