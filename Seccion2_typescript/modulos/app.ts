// import { Xmen } from './clases/xmen';
// import { Villano } from './clases/villano';
// Mediante la creacion de otro fichero ts,se puede disminuir los imports

import { Villano, Xmen } from './clases/index';

let wolverine = new Xmen('Logan', 'Wolverine');
let lexLuthor = new Villano('Lex Luthor', 'Despertar a Darkside');

wolverine.imprimir();
lexLuthor.imprimirPlan();