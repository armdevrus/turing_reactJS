import React from "react";

const Counter = () => {

    const [value, setValue] = React.useState(0)

    const handleButtonClick = () => {
        for (let i = 0; i < 10; i++) {
            setValue(val => val + 1)
            console.log(i)
        }
        // console.log(value)
    }

    return(
        <button onClick={handleButtonClick}>Value: {value}</button>
    )
}

export default Counter

