import { Task } from "./task";

export function List({ tasks, toggleComplete, deleteTask }) {
    return (
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
    );
}

