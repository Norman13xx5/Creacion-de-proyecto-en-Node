const { crearArchivo } = require('./helpers/mutiplicar');

console.clear();

const base = 5;

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( error=> console.log( error ) );