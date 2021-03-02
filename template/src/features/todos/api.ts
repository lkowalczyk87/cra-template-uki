import { apiGet } from 'features/api';

export const fetchAllTodos = () => apiGet({ endpoint: 'todos' });
