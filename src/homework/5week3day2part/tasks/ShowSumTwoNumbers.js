import React from "react";

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

export default ShowSumTwoNumbers