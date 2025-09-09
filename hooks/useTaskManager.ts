import { useCallback, useState } from 'react';
import { Task } from '../types/Task';

/**
 * Custom hook for managing task state and operations
 * Handles: add, toggle completion, delete tasks
 */
export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  /**
   * Add a new task to the list
   * @param description - The task description
   */
  const addTask = useCallback((description: string) => {
    if (!description.trim()) return; // Don't add empty tasks

    const newTask: Task = {
      id: Date.now().toString(), // Simple ID generation
      description: description.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTasks(prevTasks => [newTask, ...prevTasks]); // Add to beginning
  }, []);

  /**
   * Toggle task completion status
   * @param id - The task ID to toggle
   */
  const toggleTask = useCallback((id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  /**
   * Delete a task from the list
   * @param id - The task ID to delete
   */
  const deleteTask = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  /**
   * Get task statistics
   */
  const getTaskStats = useCallback(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const remaining = total - completed;

    return { total, completed, remaining };
  }, [tasks]);

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    getTaskStats,
  };
};
