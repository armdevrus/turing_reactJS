import React from 'react'

const CounterForm = () => {
    const [value, setValue] = React.useState('')


    const handleSubmit = (event) => {
        event.preventDefault()

        setValue(event.target.someInput.value)
    }

    const symbolsCount = React.useMemo(() => {
        console.log('use memo is called')
        let result = 2
        for (let i = 0; i < value.length; i++){
            result = result * result
            console.log(result)
        }
        return value.length
    },[value])

    console.log('render Counter Form')

    const [counter, setCounter] = React.useState(1)

    const handleClickCounter = () => {
        setCounter(counter + 1)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>{symbolsCount}</div>
                <div>
                    <input name='someInput'/>
                </div>
                <button>Submit</button>
            </form>

            <button onClick={handleClickCounter}>Counter: {counter}</button>
        </>

    )
}

export default CounterForm