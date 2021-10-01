import React from "react";
import _ from 'lodash'
import {Button, Input, InputLabel, FormHelperText} from "@material-ui/core"

import styles from "./HandleForm.module.css"
import ButtonOur from "../Button/Button";
import { useDispatch } from 'react-redux'
import { addElem } from '../../slices/ToDoSlice'
import {BASE_URL} from '../../utils/constJs'

// const HandleForm = ({onClick}) => {
const HandleForm = () => {

    const dispatch = useDispatch()

    const addElemToList = async (elem) => {
       const elemFromServer = await addElemToBackend(elem)
        dispatch(addElem(elemFromServer))
    }

    const addElemToBackend = async (elem) => {
        const response = await fetch(`${BASE_URL}/records`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value: elem})
        })
        if(response.ok){
            return await response.json()
        }
    }

    const [toDo, setToDo] = React.useState(``)

    const debounceOnChange = _.debounce(() => {
        addElemToList(toDo)
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
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <InputLabel htmlFor="my-input">To Do Elem</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" value={toDo} onChange={handleInputChange}/>
                <FormHelperText id="my-helper-text">This elem will be added to list</FormHelperText>
                <Button variant="contained" color="primary" onClick={debounceOnChange}>Add elem</Button>
            </form>
        </>

    )
}

export default HandleForm