import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../redux/tasksSlice';


const Form = () => {
  const dispatch = useDispatch();
  //const tasks = useSelector(state => state.tasks);
  const [formValue, setFormValue] = useState('');

  const hendleAddTask = (evt) => {
    evt.preventDefault();
    setFormValue(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addNewTask(formValue));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='task'
          value={formValue}
          placeholder='Enter your task...'
          onChange={hendleAddTask}
        />

        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default Form;