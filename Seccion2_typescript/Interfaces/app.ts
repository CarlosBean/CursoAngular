// Se utiliza en caso de que se manejen muchos 
interface Xmen { // va con upper camel case
    nombre: string,
    poder: string,
}

function enviarMision(xmen: Xmen) {
    console.log("Enviando a: " + xmen.nombre);
}

// No es la mejor solución, si se tuviera mas campos seria engorroso
/*function enviarMision(xmen: {nombre: string}) {
    console.log("Enviando a: " + xmen.nombre);
}*/

function enviarCuartel(xmen: Xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}

let wolverine: Xmen = {
    nombre: "Wolverine",
    poder: "Regeneración"
};

enviarMision(wolverine);