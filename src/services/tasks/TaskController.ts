import { request } from '@umijs/max';

export async function listTasks(options?: { [key: string]: any }) {
  return request('/api/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function inspectTask(
  taskId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/tasks/${taskId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
