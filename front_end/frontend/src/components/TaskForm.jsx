import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', task);
      setTask({ title: '', description: '', status: 'pending', dueDate: '' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({...task, title: e.target.value})}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({...task, description: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <select
        value={task.status}
        onChange={(e) => setTask({...task, status: e.target.value})}
        className="w-full p-2 border rounded"
      >
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({...task, dueDate: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
