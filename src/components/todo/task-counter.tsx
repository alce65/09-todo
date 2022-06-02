import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GotContext } from '../../context/got-context';
import { TodoContext } from '../../context/todo-context';

export function TaskCounter() {
    const { tasksCompleted } = useContext(TodoContext);
    const { personajes } = useContext(GotContext);
    return (
        <>
            <h3>Completed tasks: {tasksCompleted}</h3>
            <p>Número de personajes: {personajes.length}</p>
        </>
    );
}

TaskCounter.propTypes = {
    completed: PropTypes.number,
};
