"use strict";

//CONSTANTES

const $searchButton = document.querySelector(".js-button");
const $searchInput = document.querySelector(".js-search");
const $resetInput = document.querySelector(".js-reset");
const $seriesUl = document.querySelector(".js-card-ul");
const $favoritesUl = document.querySelector(".js-favorites-ul");

//Necesitamos crear una variable global para asignarle el parámetro data
let globalData = [];

//Una variable para guardar favoritos
let favoriteShows = [];
