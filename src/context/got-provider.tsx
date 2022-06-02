import { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { crearPersonajes } from '../data/personajes';
import { Personaje } from '../models/personaje';
import { GotContext } from './got-context';

export function GotContextProvider({ children }: { children: ReactElement }) {
    const initialState: Array<Personaje> = [];
    const [personajes, setPersonajes] = useState(initialState);

    useEffect(() => {
        crearPersonajes().then((data) => {
            setPersonajes(data);
        });
    }, []);

    const context = { personajes };

    return (
        <GotContext.Provider value={context}>{children}</GotContext.Provider>
    );
}
