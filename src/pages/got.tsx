import { useContext } from 'react';
import { Card } from '../components/got/card';
import { GotContext } from '../context/got-context';

import './got.css';
export function Got() {
    const { personajes } = useContext(GotContext);

    return (
        <main className="got">
            <h2>GoT</h2>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    {personajes.map((item) => (
                        <Card key={item.nombre} personaje={item} />
                    ))}
                </ul>
            </div>
            <div className="comunications"></div>
        </main>
    );
}

export default Got;
