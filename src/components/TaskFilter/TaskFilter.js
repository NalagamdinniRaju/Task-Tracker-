
import React, { useState } from 'react';
import {
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaSortAmountDown,
  FaTimes
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTaskContext } from '../../context/TaskContext';
import './TaskFilter.css';

const TaskFilter = () => {
  const { filters, setFilters, tasks } = useTaskContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Calculate task statistics
  const stats = {
    total: tasks.length,
    pending: tasks.filter(task => task.status === 'pending').length,
    inProgress: tasks.filter(task => task.status === 'in-progress').length,
    completed: tasks.filter(task => task.status === 'completed').length
  };

  return (
    <>
      <motion.div
        className="filter-container"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="search-group">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>
        </div>

        <div className="filter-group">
          <div className="filter-item">
            <FaFilter className="filter-icon" />
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="all">All Status</option>
              <option value="pending">⏳ Pending</option>
              <option value="in-progress">🔄 In Progress</option>
              <option value="completed">✅ Completed</option>
            </select>
          </div>

          <div className="filter-item">
            <FaCalendarAlt className="filter-icon" />
            <select
              value={filters.dateRange}
              onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>

          <div className="filter-item">
            <FaSortAmountDown className="filter-icon" />
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            >
              <option value="dueDate">Sort by Due Date</option>
              <option value="createdAt">Sort by Created Date</option>
            </select>
          </div>
          <button 
            className="stats-button"
            onClick={() => setIsSidebarOpen(true)}
          >
            Tasks: {stats.total}
            <span className="stats-indicator">
              <span className="dot pending"></span>
              <span className="dot in-progress"></span>
              <span className="dot completed"></span>
            </span>
          </button>
        </div>
      </motion.div>
    
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          >
            <motion.div
              className="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="sidebar-header">
                <h3>Task Statistics</h3>
                <button 
                  className="close-button"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="sidebar-content">
                <div className="stat-item total">
                  <div className="stat-label">Total Tasks</div>
                  <div className="stat-value">{stats.total}</div>
                </div>
                <div className="stat-item pending">
                  <div className="stat-label">Pending</div>
                  <div className="stat-value">{stats.pending}</div>
                </div>
                <div className="stat-item in-progress">
                  <div className="stat-label">In Progress</div>
                  <div className="stat-value">{stats.inProgress}</div>
                </div>
                <div className="stat-item completed">
                  <div className="stat-label">Completed</div>
                  <div className="stat-value">{stats.completed}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
      </AnimatePresence>
    

    </>
  );
};

export default TaskFilter;