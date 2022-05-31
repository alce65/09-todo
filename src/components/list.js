import { Task } from "./task";

export function List({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li>
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
