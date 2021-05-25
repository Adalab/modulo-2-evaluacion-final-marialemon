"use strict";

//FETCH

function getShows() {
  fetch(`//api.tvmaze.com/search/shows?q=${$searchInput.value}`)
    //then recoge la respuesta positiva (como un if)
    .then((response) => response.json()) //ejecuto el método json porque lo que espero recibir es un json
    .then((data) => {
      globalData.splice(0, globalData.length);
      for (let item of data) {
        globalData.push(item);
      }
      console.log(globalData);
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
