import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import React, { useState } from 'react';
const ITEMS =[
    {
        id:1,
        task:"Buy groceries",
       
    },
    {
        id:2,
        task:"Finish project",
       
    },
    {
        id:3,
        task:"Need to do Homework",
    }

]
const ToDoContainer = () =>{
    const [items,setItems] = useState(ITEMS);
    const [selected,setSelected] = useState([]);
    const [itemToEdit,setItemToEdit] = useState(null);

    const addItems = (task) =>{
        setItems([
            ...items,
        {
            id: items.length + 1,
            task: task,

        },
    ]);
    };

    const updaeItem = (id,newTask) =>{
        setItems(items.map(item =>
            item.id === id ? {...item,task:newTask} : item
        ));
        setItemToEdit(null);
    }

    const handleCheckboxChange = (id) =>{
        setSelected((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev,id] );
    };

    const handleDelete = ()=>{
        setItems(items.filter((item) => !selected.includes(item.id)));
        setSelected([]);
    };

    const handleEdit = (item) => {
        setItemToEdit(item);
    }
    return(
        <div className="todo-container">
            <h1>TO DO LIST</h1>

            <ToDoForm addItems={addItems} itemToEdit = {itemToEdit} updateItem={updaeItem} setSelected={setSelected} />

            {items.map((item) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ToDoItem
            item={item}
            checked={selected.includes(item.id)}
            onChange={handleCheckboxChange}
            />
             <button className="edit-button" onClick={() => handleEdit(item)}>
             Edit
             </button> 
            </div>
            ))}
            <div className="todo-buttons">
                <button onClick={handleDelete} className="delete-button">Delete Completed Tasks</button>
            </div>
            </div>
    )
}
export default ToDoContainer;