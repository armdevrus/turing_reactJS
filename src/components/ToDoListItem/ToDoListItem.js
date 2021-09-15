import React from "react";

import styles from "../ToDoList/ToDoList.module.css";
import Button from "../Button/Button";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ToDoListItem = ({elem, onDelete, onSave}) => {

    const [isEditing, setIsEditing] = React.useState(false)
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

    return(
        <>
        {/*<li className={styles.toDoListItem}>*/}
        {/*    {*/}
        {/*        isEditing ?*/}
        {/*           <>*/}
        {/*               id: {elem.id}: <input value={text} onChange={handleOnChangeValue}/>*/}
        {/*               <Button text="Cancel" isImportant={true} onClick={handleCancelClick}/>*/}
        {/*               <Button text="Save" onClick={handleSaveClick}/>*/}
        {/*           </>:*/}
        {/*           <>*/}
        {/*               <span className={styles.toDoListText}>id: {elem.id}: {elem.value}</span>*/}
        {/*               <Button text="Delete" isImportant={true} onClick={onDelete}/>*/}
        {/*               <Button text="Edit" isImportant={false} onClick={handleEditClick}/>*/}
        {/*           </>*/}
        {/*    }*/}
        {/*</li>*/}
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FolderIcon/>
                    </Avatar>
                </ListItemAvatar>
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
            </ListItem>
        </>
    )
}
export default ToDoListItem