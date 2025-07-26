const ToDoItem = ({ item, checked, onChange }) => {
    const { id, task } = item;
    return (
        <div className="todo-item">
            <input type="checkbox" checked={checked} onChange={() => onChange(id)}/>
            <div className="todo-text">{task}</div>
        </div>
    );
};
export default ToDoItem;