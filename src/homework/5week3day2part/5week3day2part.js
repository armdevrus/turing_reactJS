import React from "react";

import styles from "./5week3day2part.module.css"

const AddText = () => {

    const [element, setElement] = React.useState("")

    const handleOnChangeElement = (event) => {
       setElement(event.target.value)
        console.log(event)
    }

    const [valueText, setValueText] = React.useState("")

    const handleAddText = () => {
        setValueText(element)
    }

    return(
        <div className={styles.item}>
            <p>{valueText}</p>
            <textarea onChange={handleOnChangeElement} value={element}/>
            <div>
                <button onClick={handleAddText}>Add text</button>
            </div>
        </div>
    )
}

const CounterSymbol = () => {


    const handleShowSymbols = () => {
        alert()
    }

    return(
        <>
            <input type="text"/>
            <button onClick={handleShowSymbols}>Show symbols</button>
        </>

    )
}

export default CounterSymbol