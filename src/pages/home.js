import { useState, useEffect } from "react";
import { Add } from "../components/add";
import { List } from "../components/list";
import { TaskCounter } from "../components/task-counter";
import { getTaskList } from "../models/tasks";

export function HomePage() {
    const [tasks, setTasks] = useState([]);
    const [tasksCompleted, setTasksCompleted] = useState(0);

    useEffect(() => {
        console.log("Use effect carga");
        getTaskList().then((data) => setTasks(data));
    }, []);

    useEffect(() => {
        console.log("Use efffect contador");
        setTasksCompleted(tasks.filter((task) => task.isCompleted).length);
    }, [tasks]);

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
            <TaskCounter completed={tasksCompleted} />
            <Add addTask={addTask}></Add>
            <List
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                tasks={tasks}
            />
        </main>
    );
}
