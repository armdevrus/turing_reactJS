import React from "react";

import styles from "./AddToDoForm.module.css"

const AddToDoForm = ({onAddElem}) => {

    const [toDo, setToDo] = React.useState(``)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onAddElem(toDo)
        setToDo(``)
    }

    const handleInputChange = (event) => {
        setToDo(event.target.value)
    }

    return (
        <form className={styles.addToDoForm} onSubmit={handleFormSubmit}>
            <input className={styles.enterInput} name="todo" value={toDo} onChange={handleInputChange}/>
            <button className={styles.button}>Add Elem</button>
        </form>
    )
}

export default AddToDoForm