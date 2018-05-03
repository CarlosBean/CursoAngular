class Avenger {
    nombre: string = 'Sin nombre';
    equipo: string = undefined;
    nombreReal: string;
    puedePelear: boolean = false;
    victorias: number = 0;

    constructor( nombre: string, equipo: string, nombreReal: string ) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman: Avenger = new Avenger('Antman', 'cap', 'Scott Lang');
console.log(antman);
