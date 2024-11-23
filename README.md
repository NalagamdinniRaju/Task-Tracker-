
# ✨ Task Tracker - Modern Task Management Application

## 🚀 Overview
Task Tracker is a modern, responsive task management application built with React. It features a clean UI, intuitive task organization, and smooth animations powered by Framer Motion.

## ✨ Key Features
- 📝 Create, edit, and delete tasks
- 🔍 Advanced filtering and search capabilities
- 📊 Task statistics and status tracking
- 📱 Responsive design for all devices
- 💾 Persistent storage using localStorage
- 🎨 Modern UI with smooth animations
- 📅 Due date management
- 🔄 Real-time status updates

## 🛠️ Tech Stack
- ⚛️ React.js
- 🎭 Framer Motion
- 📅 date-fns
- 🎨 CSS Modules
- 📦 React Icons
- 🔔 React Toastify
- 💾 Local Storage API

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/NalagamdinniRaju/Task-Tracker-.git
cd task-manager
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm start
# or
yarn start
```

## 🏗️ Project Structure
```
src/
├── components/
│   ├── TaskCard/
│   ├── TaskFilter/
│   ├── TaskForm/
│   └── TaskList/
├── context/
│   └── TaskContext.js
├── utils/
│   └── localStorage.js
└── App.js
```

## 💡 Core Components

### TaskContext
- Global state management
- Task CRUD operations
- Filter management
- Persistent storage handling

### TaskFilter
- Search functionality
- Status filtering
- Date range filtering
- Sorting options
- Task statistics

### TaskForm
- Task creation/editing
- Form validation
- Modal interface
- Status selection

### TaskCard
- Task display
- Status indicators
- Edit/Delete actions
- Animated transitions

## 🎨 Features Breakdown

### Task Management
- Create new tasks with title, description, and due date
- Edit existing tasks
- Delete tasks
- Track task status (Pending, In Progress, Completed)

### Filtering & Search
- Search tasks by title or description
- Filter by status
- Filter by date range
- Sort by due date or creation date

### UI/UX Features
- Smooth animations
- Responsive design
- Interactive status indicators
- Toast notifications
- Modal forms
- Statistics sidebar


### Local Storage Structure
```javascript
{
  tasks: [
    {
      id: string,
      title: string,
      description: string,
      status: 'pending' | 'in-progress' | 'completed',
      dueDate: string,
      createdAt: string
    }
  ]
}
```

## 🤝 Contributing

### Development Process
1. Check our [Issues](https://github.com/yourusername/task-master/issues) page
2. Comment on an issue you'd like to work on
3. Follow our coding standards
4. Write clear commit messages
5. Include tests for new features

### Code Style
- Use meaningful variable and function names
- Follow React best practices
- Maintain consistent formatting
- Add comments for complex logic

### Submitting Changes
1. Fork the repository
2. Create a new branch for your feature
3. Write clean, documented code
4. Test your changes thoroughly
5. Submit a detailed pull request

## 📝 License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgments
- React Icons for the beautiful icon set
- Framer Motion for smooth animations
- React community for awesome tools and libraries

## 📫 Contact
Your Name - [NRaju]
Project Link: [https://github.com/NalagamdinniRaju/Task-Tracker-.git](https://github.com/NalagamdinniRaju/Task-Tracker-.git)

---
Made with ❤️ by [Raju](https://github.com/yourusername)

