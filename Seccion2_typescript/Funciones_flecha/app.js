// Funcion normal
var miFuncion = function (a) {
    return a;
};
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// Funciones de flecha
var miFuncionF = function (a) { return a; };
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3F = function (nombre) { return nombre.toUpperCase(); };
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        /*setTimeout( function() {
            console.log(this.nombre + "smash!!");
        }, 1500);*/
        setTimeout(function () { return console.log(_this.nombre + "smash!!"); }, 1500);
    }
};
hulk.smash();
