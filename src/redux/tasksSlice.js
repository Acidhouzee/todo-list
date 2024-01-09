import {createSlice} from '@reduxjs/toolkit';
import {addTask, fetchTasks} from "./operation";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const formDetailsSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(addTask.pending, handlePending)
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      })
      .addCase(fetchTasks.rejected, handleRejected)
  },
});

export const tasksReducer = formDetailsSlice.reducer;
