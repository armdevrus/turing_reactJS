import React from "react";

const RefComponent = () => {

    const ref = React.useRef(null)

    React.useEffect(() => {
        console.log({ref})
        console.log(ref.current.clientWidth)
        // ref.current.clientWidth = 1500
        ref.current.focus()
    })

    const handleClick = () => {
        ref.current.focus()
    }

    return (
        <input ref={ref}/>
    )
}

class RefClassComponent extends React.Component {
    ref1 = React.createRef()
    ref2 = React.createRef()

    componentDidMount() {
        console.log(this.ref1)
        console.log(this.ref1.current.clientWidth)
        this.ref1.current.focus()
    }

    handleButtonClick = () => {
        this.ref2.current.focus()
    }

    render() {
        return (
            <>
                <div>Some div in class component</div>
                <div>
                    <input ref={this.ref1}/>
                </div>
                <div>Some div in class component</div>
                <div>Some div in class component</div>
                <div>
                    <input ref={this.ref2}/>
                </div>
                <div>Some div in class component</div>
                <div>
                    <input/>
                </div>
                <div>Some div in class component</div>

                <button onClick={this.handleButtonClick}>Select one input</button>
            </>
        )
    }
}

export default RefClassComponent