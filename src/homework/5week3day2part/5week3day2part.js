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

    const [element, setElement] = React.useState('')

    const handleOnChangeValue = (event) => {
        setElement(event.target.value)
        console.log(element)
    }

    // const [value, setValue] = React.useState('')

    const handleOnShowSymbols = () => {
        alert(element.length)
    }

    return(
        <>
            <input type="text" onChange={handleOnChangeValue} value={element}/>
            <button onClick={handleOnShowSymbols}>Show symbols</button>
        </>

    )
}

const ShowSumTwoNumbers = () => {

    const [numOne, setNumOne] = React.useState('')

    const handleOnChangeNumOne = (event) => {
        setNumOne(event.target.value)
        console.log(numOne)
    }

    const [numTwo, setNumTwo] = React.useState('')

    const handleOnChangeNumTwo = (event) => {
        setNumTwo(event.target.value)
        console.log(numTwo)
    }

    const handleOnClickSumNumbers = () => {
        alert(Number(numOne) + Number(numTwo))
    }

    return(
        <>
            <input type="number" onChange={handleOnChangeNumOne} value={numOne}/>
            <input type="number" onChange={handleOnChangeNumTwo} value={numTwo}/>
            <button onClick={handleOnClickSumNumbers}>Show the sum of two numbers</button>
        </>
    )
}


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

const passwordValue = 7777
const loginValue = 'turing'
const AuthorizationForm = () => {

    const [valueInputText, setValueInputText] = React.useState('')
    const handleOnChangeInputTypeText = (event) => {
        setValueInputText(event.target.value)
    }

    const [valueInputPassword, setValueInputPassword] = React.useState('')
    const handleOnChangeInputTypePassword = (event) => {
        setValueInputPassword(event.target.value)
    }

    const [valueMessageUnderForm, setMessageUnderForm] = React.useState('')
    const handleOnChangeEnterForm = (event) => {
        event.preventDefault()
        if (Number(valueInputPassword) === passwordValue && valueInputText === loginValue){
                alert('Successfully authorization')
                setValueInputPassword('')
                setValueInputText('')
                setMessageUnderForm('')
            }else{
            setMessageUnderForm('Error authorization')
            setValueInputPassword('')
            setValueInputText('')
        }
    }
    return(
        <form onSubmit={handleOnChangeEnterForm}>
            <div>
                <span>Login: </span>
                <input type="text" onChange={handleOnChangeInputTypeText} value={valueInputText}/>
            </div>
            <div>
                <span>Password: </span>
                <input type="password" onChange={handleOnChangeInputTypePassword} value={valueInputPassword}/>
            </div>
            <p>{valueMessageUnderForm}</p>
            <button>Enter</button>
        </form>
    )
}

export default AuthorizationForm
