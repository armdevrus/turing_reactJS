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

const VisibleSquare = () => {

    const[isShowSquare, setIsShowSquare] = React.useState(false)
    const handleOnChangeInputSquare = (event) => {
        setIsShowSquare(event.target.checked)
    }
    return(
        <>
            <input type="checkbox" onChange={handleOnChangeInputSquare} checked={isShowSquare}/>
            {isShowSquare ? null : <Square/>}
        </>
    )
}
const Square = () => <div style={{width:'100px', height: '100px', backgroundColor: 'red'}}>Red square</div>


const SizeText = () => {

    const firstSize = 8
    const secondSize = 16
    const thirdSize = 24
    const fourthSize = 36

    const [selectValue, setSelectValue] = React.useState(firstSize)
    const handleOnChangeSize = (event) => {
        setSelectValue(event.target.value)
    }
    console.log(selectValue)

    return(
        <>
            <p style={{fontSize:`${selectValue}px`}}>Some text here</p>
            <select onChange={handleOnChangeSize} value={selectValue}>
                <option value={firstSize}>{firstSize}</option>
                <option value={secondSize}>{secondSize}</option>
                <option value={thirdSize}>{thirdSize}</option>
                <option value={fourthSize}>{fourthSize}</option>
            </select>
        </>

    )
}

const AddOptionForm = () => {

    const [input, setInput] = React.useState('')
    const handleOnChangeText = (event) => {
        setInput(event.target.value)
    }
    // console.log(input)

    const handleOnSubmitAddForm = (event) => {
        event.preventDefault()
        setElements([...elements, {id: elements.length + 1, name: {input}}])
        console.log(...elements)
    }

    const [elements, setElements] = React.useState([
        {id: 1, name: "Ivan"}
    ])

    return(
        <form onSubmit={handleOnSubmitAddForm}>
            <input type="text" onChange={handleOnChangeText} value={input}/>
            <button>Add option</button>
            <div>
                <select>
                    {elements.map(elem => <option key={elem.id}>{elem.name}</option>)}
                </select>
            </div>
        </form>
    )
}

export default AddOptionForm

