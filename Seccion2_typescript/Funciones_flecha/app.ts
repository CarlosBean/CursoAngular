// Funcion normal
let miFuncion = function(a){ 
    return a;
}

let miFuncion2 = function( a: number, b: number ){
    return a + b;
}

let miFuncion3 = function( nombre: string ) {
    nombre = nombre.toUpperCase();
    return nombre;
}

// Funciones de flecha
let miFuncionF = a => a; 
let miFuncion2F = ( a: number, b: number ) => a + b;
let miFuncion3F = ( nombre: string ) => nombre.toUpperCase();

let hulk = {
    nombre: "Hulk",
    smash() {
        /*setTimeout( function() {
            console.log(this.nombre + "smash!!");
        }, 1500);*/
        setTimeout(() => console.log(this.nombre + "smash!!"), 1500 );
    }
}

hulk.smash();

