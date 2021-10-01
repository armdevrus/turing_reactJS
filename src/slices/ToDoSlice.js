import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

export const ToDoSlice = createSlice({
  name: 'ToDo',
  initialState: {
    list: [{ id: 0, value: 'First from STORE' }],
    // newId: 1
  },
  reducers: {
    deleteElem: (state, action) => {
      state.list = state.list.filter(elem => elem.id !== action.payload)
    },
    addElem: (state, action) => {
      // state.list = [...state.list, { id: state.newId, value: action.payload }]
      state.list = [...state.list, action.payload ]
      // state.newId += 1
    },
    updateElem: (state, action) => {
      state.list = state.list.map(elem => elem.id === action.payload.id ?
        { ...elem, value: action.payload.value } : elem)
    },
    fill: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { deleteElem, addElem, updateElem, fill } = ToDoSlice.actions

export default ToDoSlice.reducer




