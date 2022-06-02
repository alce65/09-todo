import { Asesor } from '../models/asesor';
import { Escudero } from '../models/escudero';
import { Luchador } from '../models/luchador';
import { Rey } from '../models/rey';
import { Personaje } from '../models/personaje';

export async function crearPersonajes() {
    const data: Array<Personaje> = [
        new Rey('Joffrey', 'Baratheon', 33, 2),
        new Luchador('Jaime', 'Lannister', 33, 'espada', 8),
        new Luchador('Daenerys', 'Targaryen', 33, 'dragones', 9),
    ];
    data.push(new Asesor('Tyrion', 'Lannister', 33, data[2]));
    data.push(new Escudero('Bronn', 'Aguas Negras', 33, 5, <Luchador>data[1]));

    return data;
}
