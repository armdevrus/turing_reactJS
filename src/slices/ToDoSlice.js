import { createSlice } from '@reduxjs/toolkit'
import _ from "lodash"

export const ToDoSlice = createSlice({
    name: 'ToDo',
    initialState: {
       list: [{id: 0, value:"First initial record from store"}],
        newId: 1
    },
    reducers: {
        deleteElem:(state, action) => {
            state.value = state.list.filter(elem => elem.id !== action.payload)
        },
        addElem:(state, action) => {
            state.list = [...state.list, {id: state.newId++, value: action.payload}]
            state.newId += 1
        },
        updateElem: (state,action) => {
           state.list = state.list.map(elem => elem.id === action.payload.id ?
               {...elem, value: action.payload.value} : elem)
    },
}})

export const { deleteElem, addElem, updateElem } = ToDoSlice.actions

export default ToDoSlice.reducer


//
// const array = [4, 2, 3, 4, null, undefined, 0, 5]
//
// console.log(_.chunk(array, 3))
// console.log(_.compact(array))
//
// const result = array.map(elem => elem * elem)
//
// const resultLodash = _.map(array, elem => elem * elem)
//
// // console.log({result, resultLodash})
//
// const list = [
//     {id: 4, value: "First"},
//     {id: 6, value: "Second"},
//     {id: 3, value: "Third"}
// ]
//
// const resultSort = _.sortBy(list,'id')
// console.log({resultSort})


