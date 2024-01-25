import {collection, getDocs, addDoc, updateDoc, deleteDoc, orderBy, serverTimestamp, query, doc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const popupBody = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Slide,
}

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_) => {
    try {
      const res = await getDocs(query(collection(db, "tasks"), orderBy('taskIndex')));
      const tasks = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return tasks;
    } catch (error) {
      toast.error(error.message, popupBody);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task) => {
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

      toast.success('Task successfully added!', popupBody);
      return tasks;
    } catch (error) {
      toast.error(error.message, popupBody);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task) => {
    try {
      await updateDoc(doc(db, "tasks", task.id), {
          status: !task.status
      });
      const res = await getDocs(query(collection(db, "tasks"), orderBy('taskIndex')));
      const tasks = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      toast.success('Task successfully completed!', popupBody);
      return tasks;
    } catch (error) {
      toast.error(error.message, popupBody);
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

      toast.success('Task successfully deleted!', popupBody);
      return tasks;
    } catch (error) {
      toast.error(error.message, popupBody);
    }
  }
);
