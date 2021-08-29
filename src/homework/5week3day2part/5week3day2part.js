import React from "react";

import styles from "./5week3day2part.module.css"

const AddText = () => {

    const handleAddText = () => {

    }

    return(
        <div className={styles.item}>
            <p>Add text here</p>
            <textarea></textarea>
            <div>
                <button onClick={handleAddText}>Add text</button>
            </div>
        </div>
    )
}

export default AddText