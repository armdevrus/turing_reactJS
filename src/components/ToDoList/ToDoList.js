import React from "react";

import styles from "./ToDoList.module.css"
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import {useSelector} from "react-redux";

const ToDoList = ({list,deleteElem, saveElem}) => {

    const storeList = useSelector((state) => state.ToDo.list)

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