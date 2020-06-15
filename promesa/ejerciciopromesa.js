//Api Rick y morty

//https://rickandmortyapi.com/api/character/
//Enlazamos archivo //llamar o instanciar la dependencia con Require


let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

function traerDatos(url_api, callback) {
  // instanciamos de XMLHttpRequest
  let xhttp = new XMLHttpRequest();

  // con true, activamos el asincronismo en xmlhttprequest
  xhttp.open("GET", url_api, true);

}