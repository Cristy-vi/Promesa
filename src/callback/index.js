//Funcion que hace de callback
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function calcular(numero1, numero2, callback) {
    return callback(numero1, numero2);
}

console.log(calcular(10,20, sumar));

//si realmente no funciona no vamos a activar el callback
///////////////////////////////////////////////////////////////

// Tiempo
//funcion para poner el tiempo, y despues de 3 segundos nos vamos
function fecha(callback) {
    console.log(new Date());
    setTimeout(function() {;
        let date = new Date();
        callback(date);
    }, 3000);     
}

function imprimirFecha(dateNow) {
    console.log(dateNow);

}

//Funcion que hace de callback
fecha(imprimirFecha);

