import React from "react";
import styles from "./ToDo.module.css"
import AddToDoForm from "../../components/AddToDoForm/AddToDoForm";
import ToDoList from "../../components/ToDoList/ToDo";

const Todo = () => {

    const [list, setList] = React.useState([])

    const addElemToList = (elem) => {
        console.log("addElemToList: ", elem)
        setList([...list, elem])
    }

    const deleteElemToDoList = (index) => {
        // console.log(`deleteElemToDoList`, index,...list.slice(index), ':', ...list.slice(index, list.length + 1))
        setList([
            ...list.slice(0,index),
            ...list.slice(index + 1, list.length)
        ])
    }

    return(
        <>
            <div className={styles.container}>
                <AddToDoForm onAddElem={addElemToList}/>
                <ToDoList list={list} deleteElem={deleteElemToDoList}/>
            </div>
        </>
    )
}

export default Todo