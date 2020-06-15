//ecmascript6
//misma idea que los callbacks
//estructura de una promesa:

const QUE_PASARA = () => {
    return new Promise (resolve, reject) => {
        if (true){
            resolve('Correcto');
        } else {
            reject('Incorrecto');
        }
    });

};

QUE_PASARA()
    //arrow-function, si todo va bien trabajamos con este
    .then((response) => console.log(response) )
    //.catch es un sistema de control de errores
    .catch((err) => console.error(err) );

