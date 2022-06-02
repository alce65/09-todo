import { TaskModel } from '../models/task';
import { getTaskList } from '../data/tasks';

export class StoreClass {
    // store: string;
    // constructor() {
    //     this.store = 'Tasks';
    // }

    constructor(public store: string = 'Tasks') {}

    async getTasks(): Promise<Array<TaskModel>> {
        return localStorage.getItem(this.store)
            ? JSON.parse(<string>localStorage.getItem(this.store))
            : await getTaskList();
    }

    setTasks(tasks: Array<TaskModel>): void {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }

    deleteTasks(): void {
        localStorage.removeItem(this.store);
    }
}
