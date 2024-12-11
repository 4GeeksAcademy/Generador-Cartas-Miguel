/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function numerosToFiguras(numeroCarta) {
  if (numeroCarta === 11) {
    numeroCarta = "J";
  }
  if (numeroCarta === 12) {
    numeroCarta = "Q";
  }
  if (numeroCarta === 13) {
    numeroCarta = "K";
  }
  if (numeroCarta === 1) {
    numeroCarta = "A";
  }

  return numeroCarta;
}

function crearCarta(numeroPalo, numeroCarta) {
  let card = document.querySelector(".card");
  if (numeroPalo === 1) {
    let cardDiamante =
      '<div class="paloArribaIzquierda ♦">♦</div>' +
      '<div class="numeroCarta">' +
      numeroCarta +
      "</div>" +
      '<div class="paloAbajoDerecha ♦">♦</div>';

    card.innerHTML += cardDiamante;
  }
  if (numeroPalo === 2) {
    let cardHearth =
      '<div class="paloArribaIzquierda ♥ ">♥ </div>' +
      '<div class="numeroCarta">' +
      numeroCarta +
      "</div>" +
      '<div class="paloAbajoDerecha ♥ ">♥ </div>';

    card.innerHTML += cardHearth;
  }
  if (numeroPalo === 3) {
    let cardPicas =
      '<div class="paloArribaIzquierda  ♠"> ♠</div>' +
      '<div class="numeroCarta">' +
      numeroCarta +
      "</div>" +
      '<div class="paloAbajoDerecha  ♠"> ♠</div>';

    card.innerHTML += cardPicas;
  }
  if (numeroPalo === 4) {
    let cardTreboles =
      '<div class="paloArribaIzquierda ♣">♣</div>' +
      '<div class="numeroCarta">' +
      numeroCarta +
      "</div>" +
      '<div class="paloAbajoDerecha ♣">♣</div>';

    card.innerHTML += cardTreboles;
  }
}

window.onload = function() {
  //write your code here

  let numeroPalo = Math.floor(Math.random() * 4 + 1);
  let numeroCarta = Math.floor(Math.random() * 13 + 1);

  let cartasConFiguras = numerosToFiguras(numeroCarta);

  crearCarta(numeroPalo, cartasConFiguras);
};

/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

let buttonCambiar = document.querySelector("#cambiarCarta");

buttonCambiar.addEventListener("click", event => {
  let card = document.querySelector(".card");
  let numeroPalo = Math.floor(Math.random() * 4 + 1);
  let numeroCarta = Math.floor(Math.random() * 13 + 1);

  borrarCarta(card);

  let cartasConFiguras = numerosToFiguras(numeroCarta);

  crearCarta(numeroPalo, cartasConFiguras);
});

function borrarCarta(parent) {
  let divTop = document.querySelector(".paloArribaIzquierda");
  let divMid = document.querySelector(".numeroCarta");
  let divBottom = document.querySelector(".paloAbajoDerecha");

  parent.removeChild(divTop);
  parent.removeChild(divMid);
  parent.removeChild(divBottom);
}

/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
let inputWidth = document.querySelector("#inputWidth");
let inputHeight = document.querySelector("#inputHeight");

inputWidth.addEventListener("keyup", event => {
  let textWidth = event.target.value;
  console.log(textWidth);

  let card = document.querySelector(".card");

  if (event.keyCode === 13) {
    card.style.width = textWidth + "px";
    inputWidth.value = "";
  }
});

inputHeight.addEventListener("keyup", event => {
  let textHeight = event.target.value;
  console.log(textHeight);

  let card = document.querySelector(".card");

  if (event.keyCode === 13) {
    card.style.height = textHeight + "px";
    inputWidth.value = "";
  }
});
