import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// //Dima
const firebaseConfig = {
  apiKey: "AIzaSyBuI3t-89npjYga0j5mlXRwosrJGYBBe2c",
  authDomain: "todo-list-def6d.firebaseapp.com",
  databaseURL: "https://todo-list-def6d-default-rtdb.firebaseio.com",
  projectId: "todo-list-def6d",
  storageBucket: "todo-list-def6d.appspot.com",
  messagingSenderId: "71577994397",
  appId: "1:71577994397:web:2795262825a49802dac074"
};

// Bodya
// const firebaseConfig = {
//   apiKey: "AIzaSyCW8eQ1hOC-6AS3onFylyeyN6tss46LwGg",
//   authDomain: "todo-list-webapp-802b1.firebaseapp.com",
//   projectId: "todo-list-webapp-802b1",
//   storageBucket: "todo-list-webapp-802b1.appspot.com",
//   messagingSenderId: "651569449807",
//   appId: "1:651569449807:web:d477a141b16d04a66d533a"
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
