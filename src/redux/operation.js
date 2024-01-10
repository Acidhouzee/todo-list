import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await getDocs(collection(db, "tasks"));
      const tasks = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      await addDoc(collection(db, "tasks"), {
        task: task.task,
        status: task.status,
      });

      const res = await getDocs(collection(db, "tasks"));
      const tasks = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
