import React from "react";
import styles from "./ToDo.module.css"
import AddToDoForm from "../../components/AddToDoForm/AddToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";

const Todo = () => {

    const [list, setList] = React.useState([])

    const addElemToList = (elem) => {
        console.log("addElemToList: ", elem)
        setList([...list, elem])
    }

    const deleteElemToDoList = (index) => {
        setList([
            ...list.slice(0,index),
            ...list.slice(index + 1, list.length)
        ])
    }

    const saveElemToDoList = (index, text) => {
        console.log(index, text)
        setList([
            ...list.slice(0,index),
            text,
            ...list.slice(index + 1, list.length)
        ])
    }

    return(
        <>
            <div className={styles.container}>
                <AddToDoForm onAddElem={addElemToList}/>
                <ToDoList list={list} deleteElem={deleteElemToDoList} saveElem={saveElemToDoList}/>
            </div>
        </>
    )
}

export default Todo