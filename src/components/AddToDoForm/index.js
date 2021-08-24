import styles from "./AddToDoForm.module.css"

const AddToDoForm = () => {
    return (
        <div className={styles.addToDoForm}>
            <input className={styles.enterInput} name="todo"/>
            <button className={styles.button}>Add Elem</button>
        </div>
    )
}

export default AddToDoForm