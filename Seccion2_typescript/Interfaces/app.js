function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
// No es la mejor solución, si se tuviera mas campos seria engorroso
/*function enviarMision(xmen: {nombre: string}) {
    console.log("Enviando a: " + xmen.nombre);
}*/
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
