import {collection, getDocs, addDoc, updateDoc, deleteDoc, orderBy, serverTimestamp, query, doc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await getDocs(query(collection(db, "tasks"), orderBy('taskIndex')));
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
        taskIndex: task.taskIndex,
        createdAt: serverTimestamp()
      });

      const res = await getDocs(query(collection(db, "tasks"), orderBy('taskIndex')));
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

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      await updateDoc(doc(db, "tasks", task.id), {
          status: !task.status
      });
      const res = await getDocs(query(collection(db, "tasks"), orderBy('taskIndex')));
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

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (task, thunkAPI) => {
    try {

      await deleteDoc(doc(db, "tasks", task.id));

      const res = await getDocs(query(collection(db, "tasks"), orderBy('taskIndex')));
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
