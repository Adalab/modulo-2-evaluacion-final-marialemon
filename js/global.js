"use strict";

//FUNCIONES

function renderSeries(data) {
  //recorro el array que tiene dentro score y show, show es un objeto
  for (const object of data) {
    //crear la lista y las cards con los títulos
    const $newLi = document.createElement("li");
    $newLi.classList = "card";

    //le añadimos su id porque necesitaremos algo que conecte
    //la etiqueta pintada en HTML con el objeto del DATA
    $newLi.setAttribute("id", object.show.id);

    //si no hay portada se pondrá una imagen por defecto
    if (!object.show.image) {
      $newLi.style = `background: url(https://via.placeholder.com/210x295/ffffff/666666/?text=TV) center`;
    } else {
      $newLi.style = `background: url(${object.show.image.medium}) center; background-size: cover`;
    }

    $seriesUl.appendChild($newLi);

    const $newH3Title = document.createElement("h3");
    $newH3Title.classList = "card-title";
    $newLi.appendChild($newH3Title);

    const $text = document.createTextNode(object.show.name);
    $newH3Title.appendChild($text);
  }

  listenCards();
}

//Función para resetear las cards y que no se me acumulen
function cleanCards() {
  //Seleccionar las cards para poder eliminarlas
  const $allCards = document.querySelectorAll(".card");

  for (const card of $allCards) {
    card.remove();
  }
}

/////

function handleSubmit(ev) {
  //para prevenir que se recargue la página con submit
  ev.preventDefault();

  cleanCards();
  getShows();
}

//EVENT LISTENERS
//$searchInput.addEventListener("keyup", handleSubmit);
$searchButton.addEventListener("click", handleSubmit);
