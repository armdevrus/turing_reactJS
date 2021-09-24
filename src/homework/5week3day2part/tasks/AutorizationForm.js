import React from "react";

const passwordValue = 7777
const loginValue = 'turing'
const AuthorizationForm = () => {

    const [valueInputText, setValueInputText] = React.useState('')
    const handleOnChangeInputTypeText = (event) => {
        setValueInputText(event.target.value)
    }

    const [valueInputPassword, setValueInputPassword] = React.useState('')
    const handleOnChangeInputTypePassword = (event) => {
        setValueInputPassword(event.target.value)
    }

    const [valueMessageUnderForm, setMessageUnderForm] = React.useState('')
    const handleOnChangeEnterForm = (event) => {
        event.preventDefault()
        if (Number(valueInputPassword) === passwordValue && valueInputText === loginValue){
            alert('Successfully authorization')
            setValueInputPassword('')
            setValueInputText('')
            setMessageUnderForm('')
        }else{
            setMessageUnderForm('Error authorization')
            setValueInputPassword('')
            setValueInputText('')
        }
    }
    return(
        <form onSubmit={handleOnChangeEnterForm}>
            <div>
                <span>Login: </span>
                <input type="text" onChange={handleOnChangeInputTypeText} value={valueInputText}/>
            </div>
            <div>
                <span>Password: </span>
                <input type="password" onChange={handleOnChangeInputTypePassword} value={valueInputPassword}/>
            </div>
            <p>{valueMessageUnderForm}</p>
            <button>Enter</button>
        </form>
    )
}

export default AuthorizationForm