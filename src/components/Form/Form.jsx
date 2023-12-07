import React, { useState } from 'react'

const Form = () => {
  const [formValue, setFormValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const hendleAddTask = (evt) => {
    evt.preventDefault();
    setFormValue(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (formValue.trim() !== '') {
      setTasks([...tasks, formValue]);
      setFormValue('');
    }
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