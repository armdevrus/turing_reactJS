import React from "react";
import _ from 'lodash'

import styles from "./AddToDoForm.module.css"
import Button from "../Button/Button";

const HandleForm = ({onClick}) => {

    const [toDo, setToDo] = React.useState(``)

    const debounceOnChange = _.debounce(() => {
        onClick(toDo)
        setToDo('')
    }, 500)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        debounceOnChange()
    }

    // React.useEffect(() => {
    //
    //     const foo = (value) => {
    //         console.log({value});
    //     }
    //
    //     const debounceFoo = _.debounce(foo, 500)
    //     debounceFoo(1)
    //     debounceFoo(2)
    //     debounceFoo(3)
    //     debounceFoo(4)
    //     debounceFoo(5)
    //
    //     setTimeout(() => {
    //         debounceFoo(6)
    //         debounceFoo(7)
    //         debounceFoo(8)
    //     },1000)
    //
    // },[])

    const handleInputChange = (event) => {
        setToDo(event.target.value)
    }

    return (
        <form className={styles.addToDoForm} onSubmit={handleFormSubmit}>
            <input className={styles.enterInput} name="todo" value={toDo} onChange={handleInputChange}/>
            <Button text="Add Elem"/>
        </form>
    )
}

export default HandleForm