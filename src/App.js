// // src/App.js
// import React from 'react';
// import { TaskProvider } from './context/TaskContext';
// import TaskControls from './components/TaskControls/TaskControls';
// import TaskForm from './components/TaskForm/TaskForm';
// import TaskCard from './components/TaskCard/TaskCard';
// import { useTaskContext } from './context/TaskContext';
// import './styles/global.css';

// const TaskList = () => {
//   const { tasks, searchTerm, filterStatus, sortBy } = useTaskContext();

//   const filteredTasks = tasks
//     .filter((task) =>
//       task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       task.description.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((task) => filterStatus === "All" || task.status === filterStatus)
//     .sort((a, b) => {
//       if (sortBy === "dueDate") {
//         return new Date(a.dueDate) - new Date(b.dueDate);
//       }
//       return new Date(b.createdAt) - new Date(a.createdAt);
//     });

//   return (
//     <div className="task-grid">
//       {filteredTasks.map((task) => (
//         <TaskCard key={task.id} task={task} />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <TaskProvider>
//       <div className="app">
//         <div className="container">
//           <h1>Task Tracker</h1>
//           <TaskControls />
//           <TaskList />
//           <TaskForm />
//         </div>
//       </div>
//     </TaskProvider>
//   );
// };

// export default App;
// src/App.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { TaskProvider } from './context/TaskContext';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskForm from './components/TaskForm/TaskForm';
import { useTaskContext } from './context/TaskContext';
import TaskList from './components/TaskList/TaskList';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';


const AddTaskButton = () => {
  const { setIsModalOpen } = useTaskContext();

  return (
    <button
      className="add-task-button"

      onClick={() => setIsModalOpen(true)}
    >
      <FaPlus className="add-icon" />
      Add New Task
    </button>
  );
};

const App = () => {
  return (
    <TaskProvider>
      <div className="app">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="container">
          <h1>
            Task Tracker
          </h1>
          
          <div className="app-header">
            <TaskFilter />
            <AddTaskButton />
          </div>
          
          <TaskList />
          <TaskForm />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;