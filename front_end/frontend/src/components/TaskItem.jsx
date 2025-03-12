import React from 'react';
import axios from 'axios';

const TaskItem = ({ task }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      // Implement refresh logic here
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <div className="flex justify-between mt-2">
        <span className={`px-2 py-1 rounded ${
          task.status === 'completed' ? 'bg-green-200' : 
          task.status === 'in progress' ? 'bg-yellow-200' : 'bg-gray-200'
        }`}>
          {task.status}
        </span>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
