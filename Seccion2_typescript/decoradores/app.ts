function consola( constructor: Function ) {
    console.log( constructor );
}

// La implementar este decorador, se debe agregar la propiedad experimentalDecorators
// para evitar que nos marque error.

//Este decorador nos permite mostrar en consola al constructor
@consola
class Villano {
    constructor( public nombre: string ) {

    }
}