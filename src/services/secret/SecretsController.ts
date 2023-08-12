import { request } from '@umijs/max';

export async function listSecrets(options?: { [key: string]: any }) {
  return request('/api/secrets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function createSecret(
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request('/api/secrets/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function inspectSecret(
  secretId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/secrets/${secretId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function updateSecret(
  secretId: string,
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request(`/api/secrets/${secretId}/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteSecret(
  secretId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/secrets/${secretId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
