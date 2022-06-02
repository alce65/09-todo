/* eslint-disable no-unused-vars */
import { Personaje } from './personaje.js';

export class Rey extends Personaje {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public añosReinado: number
    ) {
        super(nombre, familia, edad, 'rey');
        this.mensaje = 'Vais a morir todos';
    }
}
