import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/operation';

const Form = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState('');
  const [taskIndex, setTaskIndex] = useState(0);

  const handleAddTask = (evt) => {
    evt.preventDefault();
    setFormValue(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newTask = {
      task: formValue,
      status: false,
      taskIndex: taskIndex
    }
    setTaskIndex((prevIndex) => prevIndex + 1);

    setFormValue('');
    dispatch(addTask(newTask));
  };

  // const handleClearTasks = () => {
  //   dispatch(clearTasks());
  // };

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
      {/* <button onClick={handleClearTasks} type='submit'>Clean Tasks</button> */}
    </div>
  )
}

export default Form;
