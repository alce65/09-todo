/* eslint-disable no-unused-vars */
export class Personaje {
    static serie = 'GoT';
    private _estadoVivo: boolean;
    public get estadoVivo(): boolean {
        return this._estadoVivo;
    }
    protected mensaje: string;
    // public nombre: string;
    constructor(
        public nombre: string,
        public familia: string,
        public edad: number,
        public categoria: 'rey' | 'luchador' | 'asesor' | 'escudero'
    ) {
        // this.nombre = nombre
        this._estadoVivo = true;
        this.mensaje = '';
    }
    comunicar() {
        return this.mensaje;
    }
    morir() {
        this._estadoVivo = false;
    }
}
