import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GotContext } from '../../context/got-context';

export function TaskCounter({ completed }: { completed: number }) {
    const { personajes } = useContext(GotContext);
    return (
        <>
            <h3>Completed tasks: {completed}</h3>
            <p>Número de personajes: {personajes.length}</p>
        </>
    );
}

TaskCounter.propTypes = {
    completed: PropTypes.number,
};
