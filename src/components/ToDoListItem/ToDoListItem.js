import React from "react";
import styles from "../ToDoList/ToDoList.module.css";
import Button from "../Button/Button";

const ToDoListItem = ({index, elem, onDelete, onSave}) => {

    const [isEditing, setIsEditing] = React.useState(false)
    const [text, setText] = React.useState(elem)

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleOnChangeValue = (event) => {
        setText(event.target.value)
    }

    const handleCancelClick = () => {
        setIsEditing(false)
        setText(elem)
    }

    const handleSaveClick = () => {
        onSave(text)
        handleCancelClick()
    }

    return(
        <li className={styles.toDoListItem}>
            {
                isEditing ?
                   <>
                       {index + 1}: <input value={text} onChange={handleOnChangeValue}/>
                       <Button text="Cancel" isImportant={true} onClick={handleCancelClick}/>
                       <Button text="Save" onClick={handleSaveClick}/>
                   </>:
                   <>
                       <span className={styles.toDoListText}>{index + 1}: {elem}</span>
                       <Button text="Delete" isImportant={true} onClick={onDelete}/>
                       <Button text="Edit" isImportant={false} onClick={handleEditClick}/>
                   </>
            }
        </li>
    )
}
export default ToDoListItem