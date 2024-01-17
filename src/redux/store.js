import {tasksReducer} from "./tasksSlice";
import {configureStore} from "@reduxjs/toolkit";
import {
  persistStore,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
