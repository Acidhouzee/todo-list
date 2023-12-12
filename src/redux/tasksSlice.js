import { createSlice } from '@reduxjs/toolkit';

const formDatailsSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addNewTask: (state, action) => {
      return [...state, action.payload];
    },
    clearTasks: (state) => {
      return [];
    },
    taskStatus: (state, action) => {
      for (const task of state) {
        if (task.id === action.payload) {
          task.status = !task.status;
          break;
        }
      }
    },
    deleteTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addNewTask, clearTasks, taskStatus, deleteTask } = formDatailsSlice.actions;
export const formDatailsReducer = formDatailsSlice.reducer;
