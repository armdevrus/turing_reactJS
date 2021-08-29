import React from "react";

import s from "./5week3day2part.module.css"

const AddText = () => {
    return(
        <div className={s.item}>
            <p>Add text here</p>
            <textarea></textarea>
            <div>
                <button>Add text</button>
            </div>
        </div>
    )
}

export default AddText