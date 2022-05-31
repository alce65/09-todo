import { useState } from "react";
import { Add } from "../components/add";
import { List } from "../components/list";
import { TaskCounter } from "../components/task-counter";
import { getTaskList } from "../models/tasks";

export function HomePage() {
    const [tasks, setTasks] = useState(getTaskList());

    const getCompleted = () => {
        let counter = 0;
        tasks.forEach((task) => {
            if (task.isCompleted) counter++;
        });
        return counter;
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleComplete = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        );

        setTasks(updatedTasks);
    };

    return (
        <main>
            <h1>Lista de tareas</h1>
            <TaskCounter completed={getCompleted()} />
            <Add addTask={addTask}></Add>
            <List
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                tasks={tasks}
            />
        </main>
    );
}
