import {createSlice} from '@reduxjs/toolkit';

const formFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { 
        filterTasks: (state, action) => {
            return action.payload
        }
    }
});

export const { filterTasks } = formFilterSlice.actions;
export const filterReducer = formFilterSlice.reducer;