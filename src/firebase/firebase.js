import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW8eQ1hOC-6AS3onFylyeyN6tss46LwGg",
  authDomain: "todo-list-webapp-802b1.firebaseapp.com",
  projectId: "todo-list-webapp-802b1",
  storageBucket: "todo-list-webapp-802b1.appspot.com",
  messagingSenderId: "651569449807",
  appId: "1:651569449807:web:d477a141b16d04a66d533a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);