import React from 'react'
// import { useDispatch } from 'react-redux'

import styles from './ToDo.module.css'
import HandleForm from '../../components/HandleForm/HandleForm'
import ToDoList from '../../components/ToDoList/ToDoList'
// import { addElem } from '../../slices/ToDoSlice'

const ToDo = () => {
  //
  // const dispatch = useDispatch()
  //
  // const addElemToList = (elem) => {
  //   dispatch(addElem(elem))
  // }
  return (
    <div className={styles.container}>
      {/*<HandleForm onClick={addElemToList}/>*/}
      <HandleForm/>
      <ToDoList/>
    </div>
  )
}

export default ToDo
