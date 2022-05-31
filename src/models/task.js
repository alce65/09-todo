export class TaskModel {
    id;
    title;
    responsible;
    isCompleted;
    static generateId() {
        return Math.ceil(Math.random() * 100_000);
    }
    constructor(title = "", responsible = "") {
        this.title = title;
        this.responsible = responsible;
        this.isCompleted = false;
        this.id = TaskModel.generateId();
    }
}
