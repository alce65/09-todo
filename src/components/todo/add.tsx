import { SyntheticEvent, useState, useContext } from 'react';
import { TodoContext } from '../../context/todo-context';
import { TaskModel } from '../../models/task';
export function Add() {
    const users = ['Pepe', 'Elena', 'Juan', 'Luisa'];
    const { addTask } = useContext(TodoContext);

    const [formData, setFormData] = useState({
        title: '',
        responsible: '',
        isOk: false,
        importance: '',
    });

    function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        console.log('Guardando', formData);
        addTask(new TaskModel(formData.title, formData.responsible));
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        const value =
            element.type === 'checkbox' ? element.checked : element.value;
        setFormData({ ...formData, [element.name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="title"
                    placeholder="Describ la tarea"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <select
                    name="responsible"
                    id=""
                    value={formData.responsible}
                    onChange={handleChange}
                    required
                >
                    <option></option>
                    {users.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="isOk">Estas de acuerdo con ....</label>
                <input
                    type="checkbox"
                    name="isOk"
                    id="isOk"
                    checked={formData.isOk}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type="radio"
                    name="importance"
                    id="urgente"
                    value="urgente"
                    onChange={handleChange}
                />
                <label htmlFor="urgente">Urgente</label>
                <input
                    type="radio"
                    name="importance"
                    id="normal"
                    value="normal"
                    onChange={handleChange}
                />
                <label htmlFor="normal">Normal</label>
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}
