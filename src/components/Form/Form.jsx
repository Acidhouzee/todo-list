import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewTask, clearTasks } from '../../redux/tasksSlice';
// import { nanoid } from 'nanoid';



const Form = () => {
  // const dispatch = useDispatch();
  const [formValue, setFormValue] = useState('');

  const handleAddTask = (evt) => {
    evt.preventDefault();
    setFormValue(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // const newTask = {
    //   id: nanoid(5),
    //   task: formValue,
    //   status: false
    // }
    setFormValue('');
    // dispatch(addNewTask(newTask));
  };

  const handleClearTasks = () => {
    // dispatch(clearTasks());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          value={formValue}
          placeholder='Enter your task...'
          onChange={handleAddTask}
        />

        <button type='submit'>Add Task</button>
      </form>
      <button onClick={handleClearTasks} type='submit'>Clean Tasks</button>
    </div>
  )
}

export default Form;
