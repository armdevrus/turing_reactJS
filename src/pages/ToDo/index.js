import React from "react";
import styles from "./ToDo.module.css"
import AddToDoForm from "../../components/AddToDoForm";
import ToDoList from "../../components/ToDoList";

const Todo = () => {
    // const list = ["Wake up", "Drink coffee", "test"]

    const [list, setList] = React.useState([])

    const addElemToList = (elem) => {
        console.log("addElemToList: ", elem)
        // setList([...list, elem])
        setList(list.concat(elem))
    }


    return(
        <>
            <div>
                <AddToDoForm onAddElem={addElemToList}/>
                <ToDoList list={list}/>
            </div>
        </>
    )
}

export default Todo