import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from "../../redux/selectors";
import { fetchTasks } from '../../redux/operation';

const TasksTable = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  console.log(tasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.status) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 },
  );

  // const handleTaskStatus = (id) => {
  //   dispatch(taskStatus(id));
  // };

  // const handleTaskRemove = (id) => {
  //   dispatch(deleteTask(id));
  // };

  return (
    <>
      Tasks
      Active: {count.active}
      Completed: {count.completed}
      <ul>
        { tasks.length > 0 &&
        tasks.map(task =>
          <li className={task.status ? 'task-end' : 'task-start'} key={task.id}>
            {/* <input type='checkbox' onChange={() => { handleTaskStatus(task.id); }} checked={task.status ? 'checked' : ''} /> */}
            <p>{task.task}</p>
            {/* <button className='remove-task' onClick={() => { handleTaskRemove(task.id); }}>
              Remove Task
            </button> */}
          </li>,
        )}
      </ul>
    </>
  );
};

export default TasksTable;
