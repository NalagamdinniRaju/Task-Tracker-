

import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import TaskCard from '../TaskCard/TaskCard';
import { useTaskContext } from '../../context/TaskContext';
import './TaskList.css';

const TaskList = () => {
  const { tasks } = useTaskContext();

  if (tasks.length === 0) {
    return (
      <motion.div
        className="no-tasks-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaSearch className="no-tasks-icon" />
        <h3 className="no-tasks-title">No Tasks Found</h3>
        <p className="no-tasks-description">Try adjusting your search or filters</p>
      </motion.div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;