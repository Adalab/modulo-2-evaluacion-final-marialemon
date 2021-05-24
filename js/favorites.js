"use strict";

const favoriteShows = [];

//Seleccionamos todas las cards
function listenCards() {
  const $allCards = document.querySelectorAll(".card");

  for (const card of $allCards) {
    //se le asigna un listener a CADA card, por eso se mete dentro del for of
    card.addEventListener("click", handleClickCard);
  }
}

function handleClickCard(e) {
  //hacemos currentTarget para que seleccione SOLO
  //el elemento al que le tenemos puesto el LISTENER
  const clickedCard = e.currentTarget;

  //guardamos el id de la card seleccionada
  const selectedId = parseInt(clickedCard.id);

  console.log(selectedId);

  const showInfo = globalData.find((file) => file.show.id === selectedId);

  console.log(showInfo);

  //hacemos un toggle para añadir y quitar la clase
  clickedCard.classList.toggle("favorite");
}
