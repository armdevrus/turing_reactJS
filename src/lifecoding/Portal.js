import React from "react";
import ReactDOM from 'react-dom'


const SomeBlock = ({colour}) => {
    return(
        <div style={{ width: '200px', height: '200px', backgroundColor: colour }}>
            It is some block
        </div>
    )
}

const Main = () => {

    const [colour, setColour] = React.useState('red')

    const handleButtonClick = () => {
        setColour(colour => colour === 'red' ? 'blue' : 'red')
    }

    const portalElem = React.useMemo(() => {
        const bodyElem = document.querySelector('body')
        return ReactDOM.createPortal(<SomeBlock colour={colour}/>, bodyElem)},[colour])

    return(
        <div id="main">
            {portalElem}
            <div>
                <SomeBlock colour={colour}/>
            </div>
            <button onClick={handleButtonClick}>
                Click me
            </button>
        </div>
    )
}

export  default Main