import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount} from "./CounterSlice";
import CounterShow from "./CounterShow";

const Counter = () => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = React.useState('')

    return(
        <div>
            Counter
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <input value={inputValue}
                   onChange={(event) => {setInputValue(event.target.value)}}/>
            <button onClick={()=> dispatch(incrementByAmount(parseInt(inputValue)))}>Add value</button>
            <CounterShow/>
        </div>
    )
}

export default Counter