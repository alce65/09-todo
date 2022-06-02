import { createContext } from 'react';
import { Personaje } from '../models/personaje';

const initialContext: {
    personajes: Array<Personaje>;
} = {
    personajes: [],
};

export const GotContext = createContext(initialContext);
