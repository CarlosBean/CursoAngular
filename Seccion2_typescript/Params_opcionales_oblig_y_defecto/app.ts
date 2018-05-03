function activar (
    quien: string, // param obligatorio, deben ir al principio
    objeto: string = "batiseñal", //param por defecto
    momento?: string // param opcional, deben ir al final
) {
    let mensaje: string;

    if ( momento ) {
        mensaje = `${ quien } activo la ${ objeto } en la ${ momento }`;
    } else {
        mensaje = `${ quien } activo la ${ objeto }`;
    }

    console.log(mensaje);
}

activar("Gordon");

