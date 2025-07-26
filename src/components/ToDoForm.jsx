import React, { useEffect, useState } from 'react';

const ToDoForm = (props) => {
    const { itemToEdit, addItems, updateItem, setSelected } = props;
    const [item, setItem] = useState('');
    const [error, setError] = useState("");

    useEffect(() => {
        if (itemToEdit) {
            setItem(itemToEdit.task);
        } else {
            setItem('');
        }
    }, [itemToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item) {
            setError("Task is Required! Please enter a task.");
            return;
        }
        if (itemToEdit) {
            updateItem(itemToEdit.id, item);
        } else {
            addItems(item);
        }
        setSelected && setSelected([]);
        setError("");
        setItem('');
    };

    const handleItemChange = (e) => {
        setItem(e.target.value);
    };

    return (
        <div className="todo-form">
            <h2>{itemToEdit ? "Edit Task" : "Add Task"}</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                    <label htmlFor="todo-input">Add a new task:</label>
                    <input type="text"id="todo-input" placeholder="What needs to be done" value={item}
                        onChange={handleItemChange}
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit">{itemToEdit ? "Edit Task" : "Add Task"}</button>
                </div>
            </form>
        </div>
    );
};

export default ToDoForm;