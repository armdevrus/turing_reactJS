import React from "react";

const AddOptionForm = () => {

    const [input, setInput] = React.useState('')
    const [elements, setElements] = React.useState([])

    const handleOnChangeText = (event) => {
        setInput(event.target.value)
    }

    const handleOnSubmitAddForm = (event) => {
        event.preventDefault()
        setElements([...elements, {id: elements.length + 1, name: input}])
        console.log(elements)
    }

    return(
        <form onSubmit={handleOnSubmitAddForm}>
            <input type="text" onChange={handleOnChangeText} value={input}/>
            <button>Add option</button>
            <br/>
            <select>
                {elements.map(elem => <option key={elem.id}>{elem.name}</option>)}
            </select>
        </form>
    )
}

export default AddOptionForm