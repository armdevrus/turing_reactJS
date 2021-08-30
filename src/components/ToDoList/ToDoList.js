import React from "react";
import styles from "./ToDoList.module.css"
import Button from "../Button/Button";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = ({list,deleteElem}) => {

    return (
        <>
            <h3>To Do List:</h3>
            <ul className={styles.toDoList}>

                {list.map((elem, index) =>
                        <ToDoListItem
                            key={index}
                            index={index}
                            elem={elem}
                            onDelete={() => deleteElem(index)}
                            onSave={() => console.log(`onSave`)}/>
                    )
                }
            </ul>
        </>
    )
}

export default ToDoList