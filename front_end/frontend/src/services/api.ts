import axios, { AxiosError } from 'axios';

interface Task {
  _id?: string;
  title: string;
  description?: string;
  status: 'pending' | 'in progress' | 'completed';
  dueDate?: Date;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add error interceptor
api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    console.error('API Error:', error.response?.data);
    return Promise.reject(error);
  }
);

export const getTasks = () => api.get<Task[]>('/api/tasks');
export const createTask = (task: Task) => api.post<Task>('/api/tasks', task);
export const updateTask = (id: string, task: Task) => api.put<Task>(`/api/tasks/${id}`, task);
export const deleteTask = (id: string) => api.delete(`/api/tasks/${id}`);

export type { Task };
export default api;
