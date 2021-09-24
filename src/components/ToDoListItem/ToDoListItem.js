import React from 'react'

// import styles from '../ToDoList/ToDoList.module.css'
// import Button from '../Button/Button'
import { Avatar, IconButton, ListItem,
    ListItemAvatar, ListItemSecondaryAction, ListItemText, Input } from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

const ToDoListItem = ({ elem, onDelete, onSave }) => {

  const [isEditing, setIsEditing] = React.useState()
  const [text, setText] = React.useState(elem.value)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleOnChangeValue = (event) => {
    setText(event.target.value)
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    setText(elem.value)
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    onSave(text)
  }

  return (
    <>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon/>
                </Avatar>
            </ListItemAvatar>
          {isEditing ?
            <>
                <Input value={text} onChange={handleOnChangeValue}/>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="save" onClick={handleSaveClick}>
                    <SaveIcon/>
                  </IconButton>
                    <IconButton edge="end" aria-label="cancel" onClick={handleCancelClick}>
                        <CancelIcon/>
                </IconButton>
                </ListItemSecondaryAction>
            </> :
            <>
                  <ListItemText
                    primary={elem.value}
                    secondary={elem.id}
                  />
                  <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                          <DeleteIcon/>
                      </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={handleEditClick}>
                      <EditIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
            </>}
        </ListItem>
        </>
        )
      }
      export default ToDoListItem