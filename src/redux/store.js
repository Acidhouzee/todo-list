import {tasksReducer} from "./tasksSlice";
import { filterReducer } from "./filterSlice";
import {configureStore} from "@reduxjs/toolkit";
import {  persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
