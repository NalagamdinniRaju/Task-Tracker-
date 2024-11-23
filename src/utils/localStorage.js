// src/utils/localStorage.js
const TASKS_KEY = 'tasks';

export const loadTasks = () => {
  try {
    const savedTasks = localStorage.getItem(TASKS_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};