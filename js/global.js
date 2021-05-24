"use strict";

//FUNCIONES

//Creamos las cards

function renderSeries(data) {
  //recorro el array que tiene dentro score y show, show es un objeto
  for (const object of data) {
    //si la card que se pinta está en favoritos

    //crear la lista y las cards con los títulos
    const $newLi = document.createElement("li");
    $newLi.classList = "card";

    //le añadimos su id porque necesitaremos algo que conecte
    //la etiqueta pintada en HTML con el objeto del DATA
    $newLi.dataset.id = object.show.id;

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

    const isPresent = favoriteShows.find((fav) => fav === object.show.id);

    if (isPresent === undefined) {
      $newLi.classList.add = "";
    } else {
      $newLi.classList.add = "favorite";
      $favoritesUl.appendChild($newLi);
    }
  }

  console.log($favoritesUl);

  //Seleccionamos todas las cards para hacer FAVORITOS

  const $allCards = document.querySelectorAll(".card");

  for (const card of $allCards) {
    //se le asigna un listener a CADA card, por eso se mete dentro del for of
    card.addEventListener("click", handleClickCard);
  }
}

//Función para resetear las cards y que no se me acumulen
function cleanCards() {
  //Seleccionar las cards para poder eliminarlas
  const $allCards = document.querySelectorAll(".card");

  for (const card of $allCards) {
    card.remove();
  }
}

//////////////FAVORITOS

function handleClickCard(e) {
  //hacemos currentTarget para que seleccione SOLO
  //el elemento al que le tenemos puesto el LISTENER
  const clickedCard = e.currentTarget;

  //guardamos el id de la card seleccionada
  //le hacemos un parseInt porque inicialmente era una STRING
  //y necesitamos convertirla en NUMBER para que sea el mismo tipo de dato
  //que el que tenemos en data
  const selectedId = parseInt(clickedCard.dataset.id);

  //En el array de favoriteShows buscamos la coincidencia del data-id de la card seleccionada
  //con el id de la serie del objeto data
  //si la card clickada está en favoritos
  const isPresent = favoriteShows.find((fav) => fav === selectedId);

  //si isPresent no está en el array de favoritos, mételo
  if (isPresent === undefined) {
    favoriteShows.push(selectedId);
  } else {
    //filtro y sobreescribo mi array inicial con los favoritos
    //con esto, si dejo de seleccionar la card, se elimina del array
    favoriteShows = favoriteShows.filter((fav) => fav !== selectedId);
  }

  renderSeries(globalData);

  //hacemos un toggle para añadir y quitar la clase
  clickedCard.classList.toggle("favorite");
}

/////
////

//paso 1: getItem
//si el localStorage está vacío llama al fetch
//"shows" es una KEY que me he inventado, puede tener cualquier otro nombre
if (localStorage.getItem("shows") === null) {
  getShows();
} else {
  //LocalStorage
  //paso 2: guardar los datos del localStorage en una variable
  globalData = JSON.parse(localStorage.getItem("shows"));
  //mostrar las series
  renderSeries(globalData);
}

//////

function handleSubmit(ev) {
  //para prevenir que se recargue la página con submit
  ev.preventDefault();

  cleanCards();
  getShows();
}

//EVENT LISTENERS
//$searchInput.addEventListener("keyup", handleSubmit);
$searchButton.addEventListener("click", handleSubmit);
