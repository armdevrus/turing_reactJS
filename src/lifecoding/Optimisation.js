import React from "react";

class Optimisation extends React.Component {

    state = {
        count: 0,
        doubleCount: 1
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.count === this.state.count) {
            return false
        } else {
            return true
        }
    }

    handleButtonClick = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1,
        })
    }
    handleDoubleButtonClick = () => {
        this.setState({
            ...this.state,
            doubleCount: this.state.doubleCount + 2
        })
    }

    render() {
        console.log('render')
        return (
            <>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.handleButtonClick}>
                    Child value: {this.state.count}
                </button>
                <button onClick={this.handleDoubleButtonClick}>
                    Double value: {this.state.doubleCount}
                </button>
                <br/>
                <br/>
                <br/>
                <br/>
            </>
        )
    }
}

class PureOptimisation extends React.PureComponent {
    state = {
        count: 0
    }

    handleButtonClick = () => {
        this.setState({...this.state, count: this.state.count + 1})
    }

    render() {
        console.log('render PureComponent')
        return (
            <button onClick={this.handleButtonClick}>Child Pure Component value: {this.state.count}</button>
        )
    }
}

const FuncOptimisation = React.memo(() => {

    const [value, setValue] = React.useState(0)

    const handleButtonClick = () => {
        setValue(value + 1)
    }

    console.log(`functional component render`)

    return (
        <button onClick={handleButtonClick}>Functional value: {value}</button>
    )
})

// const MemoFuncOptimisation = React.memo(FuncOptimisation)


const Main = () => {
    const [value, setValue] = React.useState(10)

    const handleValueChange = () => {
        setValue(value + 1)
    }

    return (
        <div>
            <button onClick={handleValueChange}>Change parent value: {value}</button>
            <Optimisation/>
            <PureOptimisation/>
            <br/>
            <br/>
            <br/>
            <br/>
            <FuncOptimisation/>
        </div>
    )
}

export default Main