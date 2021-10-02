import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Grid, Typography, List, ListItem, ListItemAvatar,
  Avatar, ListItemText, ListItemSecondaryAction,
  IconButton
}
  from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FolderIcon from '@material-ui/icons/Folder'
import EditIcon from '@material-ui/icons/Edit'

import styles from './ToDoList.module.css'
import ToDoListItem from '../ToDoListItem/ToDoListItem'
import { deleteElem, updateElem, fill } from '../../slices/ToDoSlice'
import { BASE_URL } from '../../utils/constJs'

const ToDoList = () => {

  const dispatch = useDispatch()

  const list = useSelector((state) => state.ToDo.list)

  const deleteElemToDoList = (id) => async () => {
    const result = await deleteElemFromServer(id)
    if (result) {
      dispatch(deleteElem(id))
    }
  }

  const deleteElemFromServer = async (id) => {
    const response = await fetch(`${BASE_URL}/records/${id}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      return true
    }
    return false
  }

  const saveElemToDoList = (id) => async (text) => {
    const result = await updateElementBackend({ id: id, value: text })
    if(result){
      dispatch(updateElem({ id: id, value: text }))
    }
  }

  const updateElementBackend = async (elem) => {
    const response = await fetch(`${BASE_URL}/records`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(elem)
    })
    if (response.ok){
      return true
    }
    return false
  }

  const getRecords = async () => {
    const response = await fetch(`${BASE_URL}/records`)
    if (response.ok) {
      const result = await response.json()
      console.log({ result })
      dispatch(fill(result))
    }
  }

  React.useEffect(() => {
    getRecords()
  }, [])

  return (
    <>
      <Typography variant="h6">To Do List:</Typography>
      <List dense className={styles.listContainer}>
        {list.map(elem => (
          <ToDoListItem key={elem.id}
                        elem={elem}
                        onDelete={deleteElemToDoList(elem.id)}
                        onSave={saveElemToDoList(elem.id)}/>
        ))}
      </List>
    </>
  )
}

export default ToDoList