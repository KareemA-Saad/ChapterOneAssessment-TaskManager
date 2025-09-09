import { Task } from '../types/Task';

/**
 * Sort tasks by creation date (newest first)
 */
export const sortTasksByDate = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

/**
 * Filter tasks by completion status
 */
export const filterTasksByStatus = (tasks: Task[], completed: boolean): Task[] => {
  return tasks.filter(task => task.completed === completed);
};

/**
 * Validate task description
 */
export const isValidTaskDescription = (description: string): boolean => {
  return description.trim().length > 0 && description.trim().length <= 200;
};
