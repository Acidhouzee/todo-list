import {createSlice} from '@reduxjs/toolkit';

const formFilterSlice = createSlice({
  name: 'filter',
  initialState: {
    taskName: '',
    draggable: false,
  },
  reducers: { 
        filterTasks: (state, action) => {
            state.taskName = action.payload;
            state.draggable = state.taskName.trim() !== '' ? true : false;
        }
    }
});

export const { filterTasks } = formFilterSlice.actions;
export const filterReducer = formFilterSlice.reducer;