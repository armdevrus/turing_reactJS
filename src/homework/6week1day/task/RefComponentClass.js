import React from "react";

class RefClassComponent extends React.Component {

    refComp1 = React.createRef()
    refComp2 = React.createRef()

    componentDidMount() {
        console.log(this.refComp1)
        console.log(this.refComp1.current.clientWidth)
        this.refComp1.current.focus()
    }

    handleOnClickButton = () => {
        this.refComp2.current.focus()
    }

    render() {
        return(
            <>
                <div>Some div in class component</div>
                <div>
                    <input ref={this.refComp1}/>
                </div>
                <div>Some div in class component</div>
                <div>Some div in class component</div>
                <div>
                    <input ref={this.refComp2}/>
                </div>
                <div>Some div in class component</div>
                <div>
                    <input/>
                </div>
                <div>Some div in class component</div>

                <button onClick={this.handleOnClickButton}>Select one input</button>
            </>
        )
    }
}
export default RefClassComponent