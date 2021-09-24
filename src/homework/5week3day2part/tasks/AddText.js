import React from "react";

const AddText = () => {

    const [element, setElement] = React.useState("")
    const [valueText, setValueText] = React.useState("")

    const handleOnChangeElement = (event) => {
        setElement(event.target.value)
        console.log(event)
    }

    const handleAddText = () => {
        setValueText(element)
    }

    return(
        <div>
            <p>{valueText}</p>
            <textarea onChange={handleOnChangeElement} value={element}/>
            <div>
                <button onClick={handleAddText}>Add text</button>
            </div>
        </div>
    )
}

export default AddText