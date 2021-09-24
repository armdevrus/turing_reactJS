import React from "react";

const textForBlur = "Hello World"
const RefComponent = () => {

    const refComp2 = React.useRef(null)

    const [input, setInput] = React.useState('')

    const handleOnClickButton = () => {
        refComp2.current.focus()
    }

    const handleOnChangeValue = (event) => {
        setInput(event.target.value)
        if (input === textForBlur){
            refComp2.current.blur()
        } else {
            setTimeout(() => {alert(textForBlur)},5000)
        }
    }

    return (
        <>
            <input type="text" ref={refComp2} onChange={handleOnChangeValue} value={input}/>
            <button onClick={handleOnClickButton}>Select input</button>
        </>
    )
}

export default RefComponent