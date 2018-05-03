function activar(quien, // param obligatorio, deben ir al principio
objeto, //param por defecto
momento // param opcional, deben ir al final
) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon");
