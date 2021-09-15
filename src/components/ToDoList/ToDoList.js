import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    Grid, Typography, List, ListItem, ListItemAvatar,
    Avatar, ListItemText, ListItemSecondaryAction,
    IconButton
}
    from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'
import FolderIcon from '@material-ui/icons/Folder'
import EditIcon from '@material-ui/icons/Edit'

import styles from "./ToDoList.module.css"
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import {deleteElem, updateElem} from "../../slices/ToDoSlice";

const ToDoList = () => {

    const dispatch = useDispatch()

    const list = useSelector((state) => state.ToDo.list)

    const deleteElemToDoList = (id) => () => {
        dispatch(deleteElem(id))
    }

    const saveElemToDoList = (id) => (text) => {
        dispatch(updateElem({id: id, value: text}))
    }

    return (
        <>
            <h3>To Do List:</h3>
            <ul className={styles.toDoList}>
                {list.map(elem =>
                    <ToDoListItem key={elem.id}
                                  elem={elem}
                                  onDelete={deleteElemToDoList(elem.id)}
                                  onSave={saveElemToDoList(elem.id)}/>)}
            </ul>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                        Avatar with text and icon
                    </Typography>
                    <div>
                        <List dense>
                            {list.map(elem => (
                                <ToDoListItem key={elem.id}
                                              elem={elem}
                                              onDelete={deleteElemToDoList(elem.id)}
                                              onSave={saveElemToDoList(elem.id)}/>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default ToDoList