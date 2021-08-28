import React from "react";
import styles from "./ToDoList.module.css"
import Button from "../Button/Button";

const ToDoList = ({list,deleteElem}) => {
    // const handleOnClickDelete = (index) => {
    //     console.log(`elem deleted`, index)
    //     deleteElem(index)
    // }

    return (
        <>
            <h3>To Do List:</h3>
            <ul className={styles.toDoList}>

                {list.map((elem, index) =>
                    <li key={index} className={styles.toDoListItem}>
                        {index + 1}: {elem}
                        <Button text="Delete" isImportant={true} onClick={() => deleteElem(index)}/>
                </li>)}
            </ul>
        </>
    )
}

export default ToDoList