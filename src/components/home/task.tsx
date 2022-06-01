import { TaskModel } from '../../models/task';

export function Task({
    task,
    toggleComplete,
    deleteTask,
}: {
    task: TaskModel;
    toggleComplete(id: TaskModel['id']): void;
    deleteTask(id: TaskModel['id']): void;
}) {
    const handleChange = () => {
        toggleComplete(task.id);
    };

    const handleClick = () => {
        deleteTask(task.id);
    };

    return (
        <>
            <h3>{task.title}</h3>
            <p>{task.responsible}</p>
            <label htmlFor="completed">Completed</label>
            <input
                checked={task.isCompleted}
                type="checkbox"
                name="isCompleted"
                id="completed"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Delete</button>
        </>
    );
}
