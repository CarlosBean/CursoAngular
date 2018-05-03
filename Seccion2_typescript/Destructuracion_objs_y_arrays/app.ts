let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga",
}

// No importa el order en que se los llame
// No aplica el tipo de dato, si se pone : se creará un alias
let { poder, nombre, clave } = avenger; 

/*let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;*/

console.log(nombre, clave, poder);

let avengers: string[] = ['Thor', 'Steve', 'Tony'];

// Si se desea el tercer elemento, se pone comas para los anteriores
// En los arrays es secuencial, SI importa el orden
let [ , , ironman ] = avengers; 
console.log( ironman );


