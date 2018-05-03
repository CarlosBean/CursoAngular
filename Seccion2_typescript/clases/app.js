var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = 'Sin nombre';
        this.equipo = undefined;
        this.puedePelear = false;
        this.victorias = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger('Antman', 'cap', 'Scott Lang');
console.log(antman);
