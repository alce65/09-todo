import { TaskModel } from '../../models/task';
import { Task } from './task';

export function List({
    tasks,
    toggleComplete,
    deleteTask,
}: {
    tasks: Array<TaskModel>;
    toggleComplete(id: TaskModel['id']): void;
    deleteTask(id: TaskModel['id']): void;
}) {
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
