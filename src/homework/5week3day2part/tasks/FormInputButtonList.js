import React from "react";

const FormInputButtonList = () => {

    const [valueText, setValueText] = React.useState('')

    const handleOnChangeSomeText = (event) => {
        setValueText(event.target.value)
    }

    const [elements, setElements] = React.useState([
        {id: 1, name: 'First text'},
        {id: 2, name: 'Second text'},
        {id: 3, name: 'Third text'}
    ])

    const handleOnSubmitAddText = (event) => {
        event.preventDefault()
        setElements([...elements,{id: elements.length + 1, name: valueText}])
        setValueText('')
        // console.log(elements)
    }

    const [id, setId] = React.useState('')

    const handleOnChangeDeleteId = (event) => {
        setId(event.target.value)
        // console.log(id)
    }

    const handleOnChangeDeleteForm = (event) => {
        event.preventDefault()
        setElements(elements.filter((elem => {
            if (elem.id != id) {
                return elem
            }
        })))
        setId('')
        event.target.reset()
    }

    return(
        <>
            <form onSubmit={handleOnSubmitAddText}>
                <input type="text" onChange={handleOnChangeSomeText} value={valueText}/>
                <button>Add paragraph</button>
                <ul>
                    {elements.map(elem => <li key={elem.id}>{elem.name}</li>)}
                </ul>
            </form>
            <form onSubmit={handleOnChangeDeleteForm}>
                <input type="number" onChange={handleOnChangeDeleteId} value={id} />
                <button>Delete element</button>
            </form>
        </>
    )
}
export default FormInputButtonList