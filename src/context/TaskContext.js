
import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    dateRange: 'all',
    sortBy: 'dueDate'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  const loadTasksFromStorage = () => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
        // toast.success('Tasks loaded successfully');
      }
    } catch (error) {
      toast.error('Error loading tasks');
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasksToStorage = (updatedTasks) => {
    try {
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      toast.error('Error saving tasks');
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = (newTask) => {
    try {
      const taskToAdd = {
        ...newTask,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      const updatedTasks = [...tasks, taskToAdd];
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks);
      setEditingTask(null); 
      toast.success('Task added successfully');
    } catch (error) {
      toast.error('Error adding task');
      console.error('Error adding task:', error);
    }
  };

  const updateTask = (updatedTask) => {
    try {
      const updatedTasks = tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks);
      toast.success('Task updated successfully');
    } catch (error) {
      toast.error('Error updating task');
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = (taskId) => {
    try {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks);
      toast.success('Task deleted successfully');
    } catch (error) {
      toast.error('Error deleting task');
      console.error('Error deleting task:', error);
    }
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => {
      // Search filter
      const matchesSearch = task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase());

      // Status filter
      const matchesStatus = filters.status === 'all' || task.status.toLowerCase() === filters.status;

      // Date range filter
      let matchesDate = true;
      if (filters.dateRange !== 'all') {
        const today = new Date();
        const taskDate = new Date(task.dueDate);
        switch (filters.dateRange) {
          case 'today':
            matchesDate = format(taskDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
            break;
          case 'week':
            const weekAgo = new Date(today.setDate(today.getDate() - 7));
            matchesDate = taskDate >= weekAgo;
            break;
          case 'month':
            const monthAgo = new Date(today.setMonth(today.getMonth() - 1));
            matchesDate = taskDate >= monthAgo;
            break;
          default:
            matchesDate = true;
        }
      }

      return matchesSearch && matchesStatus && matchesDate;
    }).sort((a, b) => {
      if (filters.sortBy === 'dueDate') {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: getFilteredTasks(),
        filters,
        setFilters,
        addTask,
        updateTask,
        deleteTask,
        isModalOpen,
        setIsModalOpen,
        editingTask,
        setEditingTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);