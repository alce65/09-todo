export function Task({ task, toggleComplete, deleteTask }) {
    const handleChange = () => {
        toggleComplete(task.id);
    };

    const handleClick = () => {
        deleteTask(task.id);
    };

    return (
        <>
            <h2>{task.title}</h2>
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

