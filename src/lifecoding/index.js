import React from "react";

const ListItem = ({text}) => {
    return (
        <>
            <br/>
            <input name={text}/>
        </>
    )
}

class List extends React.Component {

    state = {
        inputs: [
            {id: 1,value: "First input"},
            {id: 2,value: "Second input"},
            {id: 3,value: `Third input`}
        ]

    }

    handleAddInput = () => {
        this.setState({inputs:[
            {id: this.state.inputs.length + 1, value:`new element`},
                ...this.state.inputs]})
    }


    render() {
        return (
            <>
                <button onClick={this.handleAddInput}> Add new input at first place</button>
                {this.state.inputs.map((elem, index) => {
                        return <ListItem key={index.id} text={elem.value}/>
                    })
                }
            </>
        )
    }
}

const ListFunctional = () => {

    const [inputs, setInputs] = React.useState([
        {id: 1,value: "First input"},
        {id: 2,value: "Second input"},
        {id: 3,value: `Third input`}
    ])

    const [array, setArray] = React.useState([1,2,3,4,5])

    const handleAddInput = () => {
        setInputs([
            {id: inputs.length + 1, value:`new element`},
        ...inputs])
    }

    const handleAddElem = () => {
        setArray([...array,array.length + 1])
    }
    return (
        <>
            <button onClick={handleAddInput}> Add new input at first place</button>
            {inputs.map((elem)=>{
                return (<ListItem key={elem.id} text={elem.value}/>)
            })}

            <br/>
            <br/>
            <br/>

            <button onClick={handleAddElem}> Add new input at first place</button>
            {array.map((elem,index) => <p key={index}>{elem}</p>)}
        </>
    )
}

const LoginForm = () => {

    const [login, setLogin] = React.useState(``)
    const [password, setPassword] = React.useState(``)
    const {language, setLanguage} = React.useState(`0`)

    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log({
            login: event.target.login.value,
            password: event.target.password.value,
            language: event.target.language.value
        })
        setLogin(``)
        setPassword(``)
        setLanguage(``)
    }

    const handleOnClick = () => {
        setLogin(``)
    }

    const handleOnChangeLogin = (event) => {
        setLogin(event.target.value)
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleOnChangeLanguage = (event) => {
        setLanguage(event.target.value)
    }

    return(
        <>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input onChange={handleOnChangeLogin} value={login} name="login" type="text"/>
                </div>
                <div>
                    <input onChange={handleOnChangePassword} value={login} name="password" type="password"/>
                </div>
                <div>
                    <select onChange={handleOnChangeLanguage} value={language} name="language">
                        <option value=""/>
                        <option value="1">Java Script</option>
                        <option value="2">Java</option>
                        <option value="3">C++</option>
                        <option value="4">C#</option>
                    </select>
                </div>
                <div>
                    <button>Click on me</button>
                </div>
            </form>
            <button onClick={handleOnClick}>Out of the form</button>
        </>
    )
}

const Button = () => {
    const [isOn, setIsOn] = React.useState(true)

    const handleUnmountLifecycle = () => {
        setIsOn(!isOn)
    }
    return <>
            <button onClick={handleUnmountLifecycle}>Unmount/Mount</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {isOn && <Lifecycle/>}
        </>
}

class Lifecycle extends React.Component{

    state = {
        value: `Initial value`
    }

    constructor() {
        super();
        this.state = {
            value: `Initial value`
        }
        console.log(`Initialisation`)
    }

    static getDerivedStateFromProps(){
        console.log(`getDerivedStateFromProps`)
        return {}
    }

    componentDidMount() {
        console.log(`componentDidMount`)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`componentDidUpdate`)
    }

    componentWillUnmount() {
        alert(`componentWillUnmount`)
    }

    handleChangeClick = () => {
        this.setState({value:`Button was clicked`})


        const subArray1 = this.state.arr.slice(1,3)
        const subArray2 = this.state.arr.slice(3)
        // this.setState(arr: {[...subArray1,`new element`, subArray2]})
        // this.setState({...subArray1,`new element`, subArray2})
        //
    }

    render() {
        console.log(`Render`)
        return(
            <>
                <button onClick={this.handleChangeClick}>Click on me</button>
                <div>{this.state.value}</div>
            </>
        )
    }
}

export default Button

// 1. Инициализация
// 2. Монтаж / mounting
// 3. Обновление / updating - может повторяться
// 4. Размонтирование / unmounting