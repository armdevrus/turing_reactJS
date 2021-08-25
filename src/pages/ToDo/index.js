import styles from "./ToDo.module.css"
import AddToDoForm from "../../components/AddToDoForm";
import ToDoList from "../../components/ToDoList";

const Todo = () => {
    const list = ["Wake up", "Drink coffee"]
    return(
        <>
            TO DO
            <div>
                <AddToDoForm/>
                <ToDoList list={list}/>
            </div>
        </>
    )
}

export default Todo