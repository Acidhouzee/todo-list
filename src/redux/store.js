import {tasksReducer} from "./tasksSlice";
import {configureStore} from "@reduxjs/toolkit";
import {
  persistStore,
  PERSIST,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
