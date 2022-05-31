import { useState } from "react";
import { List } from "../components/list";
import { TaskCounter } from "../components/task-counter";
import { taskList } from "../data/tasks";

export function HomePage() {
  const [tasks, setTasks] = useState(taskList);

  const getCompleted = () => {
    let counter = 0;
    tasks.forEach((task) => {
      if (task.isComplete) counter++;
    });
    return counter;
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );

    setTasks(updatedTasks);
  };

  return (
    <main>
      <h1>Lista de tareas</h1>
      <TaskCounter completed={getCompleted()} />
      <List
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        tasks={tasks}
      />
    </main>
  );
}
