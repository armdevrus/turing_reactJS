import React from "react";

const textForRef = "Hello World"

class RefCompInputButtonClass extends React.Component {

    refComp = React.createRef()

    handleOnClickButton = () => {
        this.refComp.current.focus()
    }

    state = {
        value: ''
    };

    updateInput = (event) => {
        this.setState(() => ({
                value: event
            })
        )
        if (event === textForRef) {
            this.refComp.current.blur()
        }
    }

    render() {
        return (
            <>
                <input ref={this.refComp}
                       onChange={(event) => this.updateInput(event.target.value)}
                       value={this.state.value}/>
                <button onClick={this.handleOnClickButton}>Select input</button>
            </>
        )
    }
}


export default RefCompInputButtonClass