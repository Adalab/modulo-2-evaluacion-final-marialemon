"use strict";

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

//FETCH

function getShows() {
  fetch(`//api.tvmaze.com/search/shows?q=${$searchInput.value}`)
    //then recoge la respuesta positiva (como un if)
    .then((response) => response.json()) //ejecuto el método json porque lo que espero recibir es un json
    .then((data) => {
      globalData = data;

      // paso 3: setItem
      // hacemos un JSON.stringify para convertir el objeto data
      // que inicialmente es un JSON, a un string
      // porque el localStorage SOLO ADMITE arrays y strings
      localStorage.setItem("shows", JSON.stringify(globalData));
      //render series
      renderSeries(globalData);
    })

    //catch recoge la respuesta negativa (como un else)
    .catch((error) => console.log("Inténtalo de nuevo más tarde", error));
}
