import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';
import { fetchTasks, toggleCompleted, deleteTask } from '../../redux/operation';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const TasksTable = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const [items, setItems] = useState(tasks);
  console.log(tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    setItems(tasks);
  }, [tasks]);

  const handleDragEnd = async (result) => {
    if (!result.destination) return;
  
    const newItems = [...items];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
  
    const updatedNewItems = newItems.map((task, index) => ({
      ...task,
      taskIndex: index,
    }));

    console.log();

    setItems(updatedNewItems);
  
    const tasksCollectionRef = collection(db, 'tasks');
    const tasksSnapshot = await getDocs(tasksCollectionRef);
    tasksSnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  
    updatedNewItems.forEach(async (task) => {
      const taskDocRef = doc(db, 'tasks', task.id.toString());
      await setDoc(taskDocRef, task);
    });

    dispatch(fetchTasks());
  };

  const handleToggle = (task) => dispatch(toggleCompleted(task));
  const handleTaskRemove = (task) => dispatch(deleteTask(task));

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

  return (
    <>
      Tasks
      Active: {count.active}
      Completed: {count.completed}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
              {items.length > 0 &&
                items.map((task, index) => (
                  <Draggable key={index} draggableId={`item-${index}`} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={task.status ? 'task-end' : 'task-start'}
                        key={task.id}
                      >
                        <input type="checkbox" onChange={() => handleToggle(task)} checked={task.status ? 'checked' : ''} />
                        <p>{task.task}</p>
                        <button className="remove-task" onClick={() => handleTaskRemove(task)}>
                          Remove Task
                        </button>
                      </li>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TasksTable;