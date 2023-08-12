import { request } from '@umijs/max';

export async function listConfigs(options?: { [key: string]: any }) {
  return request('/api/configs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function createConfig(
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request('/api/configs/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function inspectConfig(
  configId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/configs/${configId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function updateConfig(
  configId: string,
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request(`/api/configs/${configId}/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteConfig(
  configId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/configs/${configId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
