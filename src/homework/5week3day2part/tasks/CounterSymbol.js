import React from "react";

const CounterSymbol = () => {

    const [element, setElement] = React.useState('')

    const handleOnChangeValue = (event) => {
        setElement(event.target.value)
        console.log(element)
    }

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

export default CounterSymbol