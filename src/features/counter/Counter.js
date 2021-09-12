import React from "react";
import {useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount} from "./CounterSlice";
import CounterShow from "./CounterShow";

const Counter = () => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = React.useState('')

    const handleIncreaseCounter = () => {
        dispatch(increment())
        // const arr = [{id: 1, name: `Petr`, password:`123`}]
        // localStorage.setItem(`users`, JSON.stringify(arr))
        // localStorage.getItem(`newTest`)
    }
    return(
        <div>
            Counter
            <button onClick={handleIncreaseCounter}>increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <input value={inputValue}
                   onChange={(event) => {setInputValue(event.target.value)}}/>
            <button onClick={()=> dispatch(incrementByAmount(parseInt(inputValue)))}>Add value</button>
            <CounterShow/>
        </div>
    )
}

export default Counter