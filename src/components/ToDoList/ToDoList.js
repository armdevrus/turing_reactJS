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
            <Typography variant="h6">To Do List:</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
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