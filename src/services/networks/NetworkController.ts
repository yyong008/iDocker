import { request } from '@umijs/max';

export async function queryNetworksList() {
  return request<any>('/api/networks', {
    method: 'GET',
  });
}

export async function createNetwork(
  body: { name?: string },
  options?: { [key: string]: any },
) {
  return request('/api/networks/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getNetworkDetail(
  name: string,
  options?: { [key: string]: any },
) {
  return request(`/api/networks/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function deleteNetwork(
  name: string,
  options?: { [key: string]: any },
) {
  return request(`/api/networks/${name}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
