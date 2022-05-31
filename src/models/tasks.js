import { TaskModel } from "./task";

export function getTaskList() {
    const TASKLIST = [
        {
            id: TaskModel.generateId(),
            title: "Entender React",
            responsible: "Yo",
            isCompleted: false,
        },
        {
            id: TaskModel.generateId(),
            title: "Entender el estado",
            responsible: "Yo",
            isCompleted: false,
        },
        {
            id: TaskModel.generateId(),
            title: "Entender la vida",
            responsible: "Yo",
            isCompleted: false,
        },
    ];

    return TASKLIST;
}
