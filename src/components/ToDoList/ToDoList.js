import React from "react";
import styles from "./ToDoList.module.css"

import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = ({list,deleteElem, saveElem}) => {

    return (
        <>
            <h3>To Do List:</h3>
            <ul className={styles.toDoList}>

                {list.map(elem =>
                        <ToDoListItem
                            key={elem.id}
                            // index={index}
                            elem={elem}
                            onDelete={() => deleteElem(elem.id)}
                            onSave={(text) => saveElem(elem.id, text)}/>)}
            </ul>
        </>
    )
}

export default ToDoList