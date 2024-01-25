import { createSelector } from "@reduxjs/toolkit";

export const getTasks = state => state.tasks.items;
export const filteredTasks = state => state.filter.taskName;
export const draggableTask = state => state.filter.draggable;

export const selectFilteredTasks = createSelector(
    [getTasks, filteredTasks],
    (tasks, filter) => {

        const normalizedFilter = filter.toLowerCase().trim();
       
        return tasks.filter(task => {
          if (task.task) {
            const nameMatches = task.task
              .toLowerCase()
              .includes(normalizedFilter);
    
            return nameMatches;
          }
          return false;
        });
    }
);
