import React from "react";
import styles from "./ToDo.module.css"
import HandleForm from "../../components/HandleForm/HandleForm";
import ToDoList from "../../components/ToDoList/ToDoList";
import {useSelector} from "react-redux";


let newId = 1

const Todo = () => {

    const storeList = useSelector((state) => state.ToDo.list)
    console.log({storeList})

    const [list, setList] = React.useState([{id: 0, value:"First initial record"}])

    const addElemToList = (elem) => {
        setList([...list, {id: newId, value: elem}])
        // newId = newId + 1
    }

    const deleteElemToDoList = (id) => {
        // const newList = list.filter(value => value.id !== id)
        setList(list.filter(value => value.id !== id))
    }

    const saveElemToDoList = (id, text) => {
        // const newList = list.map(elem => elem.id === id ? {...elem, value: text} : elem)
        setList(list.map(elem => elem.id === id ? {...elem, value: text} : elem))
    }

    return(
            <div className={styles.container}>
                <HandleForm onClick={addElemToList}/>
                <ToDoList list={list} deleteElem={deleteElemToDoList} saveElem={saveElemToDoList}/>
                <ToDoList list={storeList} deleteElem={deleteElemToDoList} saveElem={saveElemToDoList}/>
            </div>
    )
}

export default Todo