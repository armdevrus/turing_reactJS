import React from "react";

// const ListItem = ({text}) => {
//     return (
//         <>
//             <br/>
//             <input name={text}/>
//         </>
//     )
// }
// class LifecycleShort extends ListItem

class LifecycleShort extends React.Component{

    state = {
        value:`test data`
    }

    componentDidMount() {
        console.log(`componentDidMount`)
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate`)
    }

    handleChangeValue = () => {
        this.setState({value:`new data`})
    }

    render() {
        return(
            <>
                <button onClick={this.handleChangeValue}>Change value</button>
                <div>{this.state.value}</div>
            </>
        )
    }
}

const LifeCycleFunctional = () => {



    const [secondValue, setSecondValue] = React.useState(0)
    //
    // React.useEffect(() => {
    //     console.log(`componentDidMount func`)
    // },[])
    //
    // React.useEffect(() => {
    //     console.log(`componentDidMount func`)
    // })
    //
    // React.useEffect(() => {
    //     console.log(`first value changed`)
    // },[value, secondValue])


    const handleChangeSecondValue = () => {
        setSecondValue(secondValue + 1)
    }

    return (
        <>
            {/*<button onClick={handleChangeValue}>Change first value</button>*/}
            {/*<div>First Value: {value}</div>*/}

            {/*<button onClick={handleChangeSecondValue}>Change second value</button>*/}
            {/*<div>Second Value: {secondValue}</div>*/}

            <Counter name="First"/>
            <Counter name="Second"/>
            <Counter name="Third"/>
            <Counter name="Fourth"/>
            <Counter name="Fifth"/>
        </>
    )
}

const Counter = ({name}) => {

    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
        console.log(`componentDidMount func`)
    },[])

    React.useEffect(() => {
        console.log(`componentDidUpdate func`)
    })

    const handleChangeValue = () => {
        setValue(value + 1)
    }

    return (
        <>
            <h2>{name}</h2>
            <button onClick={handleChangeValue}>Change first value</button>
            <div>First Value: {value}</div>
        </>
    )}

const Counter2 = () => {

    React.useEffect(() => {
        console.log(`componentDidMount func Counter2`)
    },[])

    React.useEffect(() => {
        console.log(`componentDidUpdate Counter2`)
    })
    return (
        <>
            <button>Change first value</button>
            <div>First Value: 100</div>
        </>
    )
}

const Both = () => {
    return(
        <>
            <h1>Class component: </h1>
            <lifecycleShort/>
            <br/>
            <br/>
            <br/>
            <h1>Function component: </h1>
            <LifeCycleFunctional/>
        </>
    )
}

export default Both