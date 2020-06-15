// **** ESTRUCTURA DE UNA PROMESA
// ECMAScript 6

const QUE_PASARA = () => {
    // resolve si se ejectura de forma correcta
    // reject si es rechazada
    return new Promise((resolve, reject) => {
      if (true) {
        resolve("Bien echo!");
      } else {
        reject("Mal!");
      }
    });
  };
  
  // ejecutar
  // al ejecutar una promesa hay unos elementos encadenados que son .then y .catch
  QUE_PASARA()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));