import React from "react";
import _ from 'lodash'
import {Button, Input, InputLabel, FormHelperText} from "@material-ui/core"

import styles from "./HandleForm.module.css"
import ButtonOur from "../Button/Button";

const HandleForm = ({onClick}) => {

    const [toDo, setToDo] = React.useState(``)

    const debounceOnChange = _.debounce(() => {
        onClick(toDo)
        setToDo('')
    }, 500)

    const handleInputChange = (event) => {
        setToDo(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        debounceOnChange()
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <InputLabel htmlFor="my-input">To Do Elem</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" value={toDo} onChange={handleInputChange}/>
                <FormHelperText id="my-helper-text">This elem will be added to list</FormHelperText>
                <Button variant="contained" color="primary" onClick={debounceOnChange}>Add elem</Button>
            </form>
            {/*<form className={styles.addToDoForm}>*/}
            {/*    <input className={styles.enterInput} name="todo" value={toDo} onChange={handleInputChange}/>*/}
            {/*    <Button variant="contained" color="primary" onClick={debounceOnChange}>Add elem</Button>*/}
            {/*</form>*/}
        </>

    )
}

export default HandleForm