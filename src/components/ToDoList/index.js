import style from "./ToDoList.module.css"

const ToDoList = ({list}) => {

    return (
        <div>
            ToDoList
            {list.map((elem,index) => <p key={index}>{index + 1}: {elem}</p>)}
        </div>
    )
}

export default ToDoList