import { createStore } from "redux";

const initialState = { 
  tasks: [  
    { id: 0, text: "Learn HTML and CSS", completed: true },  
    { id: 1, text: "Get good at JavaScript", completed: true },    
    { id: 2, text: "Master React", completed: false },   
    { id: 3, text: "Discover Redux", completed: false },  
  ]
}

const rootReducer = (state = initialState, action) => {  
  return state;
 };

export const store = createStore(rootReducer);