import { request } from '@umijs/max';

export async function listPlugins(options?: { [key: string]: any }) {
  return request('/api/plugins', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function inspectPlugin(
  pluginName: string,
  options?: { [key: string]: any },
) {
  return request(`/api/plugins/${pluginName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
