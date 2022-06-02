import { useContext } from 'react';
import { TodoContext } from '../../context/todo-context';
import { Task } from './task';

export function List() {
    const { tasks, deleteTask, toggleComplete } = useContext(TodoContext);

    return (
        <>
            <p>Context-list</p>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task
                            deleteTask={deleteTask}
                            toggleComplete={toggleComplete}
                            task={task}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}
