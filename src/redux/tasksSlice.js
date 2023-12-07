import { createSlice } from "@reduxjs/toolkit";

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
    }
});

export const { addNewTask, clearTasks } = formDatailsSlice.actions;
export const formDatailsReducer = formDatailsSlice.reducer;
