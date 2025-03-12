import { Task, CreateTaskDTO, UpdateTaskDTO } from '../types/task';

const API_URL = import.meta.env.VITE_API_URL;

export const taskService = {
  async getAllTasks(): Promise<Task[]> {
    const response = await fetch(`${API_URL}/tasks`);
    return response.json();
  },

  async createTask(task: CreateTaskDTO): Promise<Task> {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    return response.json();
  },

  async updateTask(id: string, task: UpdateTaskDTO): Promise<Task> {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    return response.json();
  },

  async deleteTask(id: string): Promise<void> {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
  }
};
