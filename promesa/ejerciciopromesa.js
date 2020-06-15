//Api Rick y morty

//https://rickandmortyapi.com/api/character/
//Enlazamos archivo //llamar o instanciar la dependencia con Require

const API_URL = "https://rickandmortyapi.com/api/";
const Personaje = "character/"
const OPST = { crossDomain: true };

const buscopersonaje = (id) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${Personaje}`;
    $.get(url, OPST, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

promise(buscopersonaje)
    .then(function (person) {
    console.log(`El personaje que busca es ${person.name}`);
  })
    .catch((err) => console.log(`Ha ocurrido un error al buscar su personaje ${id}`));
    





