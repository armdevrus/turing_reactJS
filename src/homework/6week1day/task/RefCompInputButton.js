import React from "react";

const textForRef = "Hello World"
const RefCompInputButton = () => {

    const refComp = React.useRef(null)

    const handleOnClickSelectButton = (event) => {
        refComp.current.focus()
    }

    const [input, setInput] = React.useState('')
    const handleOnChangeInputBlur = (event) => {
        setInput(event.target.value)
        if (input === textForRef) {
            refComp.current.blur()
        }
    }

    return (
        <>
            <input ref={refComp} onChange={handleOnChangeInputBlur} value={input}/>
            <button onClick={handleOnClickSelectButton}>Select input</button>
        </>
    )
}

export default RefCompInputButton