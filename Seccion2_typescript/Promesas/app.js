var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        // Termina bien
        resolve();
        // Termina mal
        //reject(); 
    }, 1500);
});
// Al ser la promesa un metodo asincrono, mientras obtiene la respuesta
// el sistema pasa a ejecutar las sgtes ordenes
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutar cuando termine bien!");
}, function () {
    console.log("Ejecutar cuando salte todo mal");
});
console.log("Paso 2");
