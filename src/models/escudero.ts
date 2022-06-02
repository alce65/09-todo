/* eslint-disable no-unused-vars */
import { Luchador } from './luchador';
import { Personaje } from './personaje';

export class Escudero extends Personaje {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public sumision: number,
        public amo: Luchador
    ) {
        super(nombre, familia, edad, 'escudero');
        this.mensaje = 'Soy un looser';
    }
}
