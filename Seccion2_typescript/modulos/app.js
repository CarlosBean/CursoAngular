"use strict";
// import { Xmen } from './clases/xmen';
// import { Villano } from './clases/villano';
// Mediante la creacion de otro fichero ts,se puede disminuir los imports
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./clases/index");
var wolverine = new index_1.Xmen('Logan', 'Wolverine');
var lexLuthor = new index_1.Villano('Lex Luthor', 'Despertar a Darkside');
wolverine.imprimir();
lexLuthor.imprimirPlan();
