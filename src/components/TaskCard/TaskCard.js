
// src/components/TaskCard/TaskCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash, FaCalendarAlt, FaClock ,FaSpinner,FaCheckCircle} from 'react-icons/fa';
import { format } from 'date-fns';
import { useTaskContext } from '../../context/TaskContext';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  const { deleteTask, setEditingTask, setIsModalOpen } = useTaskContext();

  const handleEdit = () => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return '#f59e0b';
      case 'in-progress':
        return '#3b82f6';
      case 'completed':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };


const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <FaClock className='icon'/>;
      case 'in-progress':
        return <FaSpinner className="spin-icon icon" />;
      case 'completed':
        return <FaCheckCircle className='icon'/>;
      default:
        return null;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
    className="task-card"
    data-status={task.status.toLowerCase()}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    layout
    >
      <div className="task-header">
        <h3>{task.title}</h3>
        <div className="task-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleEdit}
            className="edit-btn"
          >
            <FaEdit size={18}/>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => deleteTask(task.id)}
            className="delete-btn"
          >
            <FaTrash size={18}/>
          </motion.button>
        </div>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-footer">
        <div className="task-dates">
          <div className="task-date">
            <FaCalendarAlt className="date-icon" />
            <span>Due: {format(new Date(task.dueDate), 'MMM dd, yyyy')}</span>
          </div>
          <div className="task-date">
            <FaClock className="date-icon" />
            <span>Created: {format(new Date(task.createdAt), 'MMM dd, yyyy')}</span>
          </div>
        </div>

        <div
          className="task-status"
          style={{
            backgroundColor: `${getStatusColor(task.status)}20`,
            color: getStatusColor(task.status)
          }}
          >
              <span className="status-icon">{getStatusIcon(task.status)}</span>
            {task.status}
          </div>
     
        </div>
        
      </motion.div>
    );
  };
  
  export default TaskCard;