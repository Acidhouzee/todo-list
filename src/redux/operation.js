import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async () => {
    try {
      const response = await getDocs(collection(db, "tasks"));
      console.log(response.doc.data())
      // return ;
      // return response.forEach((doc) => {
      //   doc.data()
      // });
    } catch (error) {
      console.log(error)
      return error.message;
    }
  }
)
