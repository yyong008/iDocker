import { request } from '@umijs/max';

export async function createExec(
  containerId: string,
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${containerId}/exec`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function startExec(
  execId: string,
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request(`/api/exec/${execId}/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function inspectExec(
  execId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/exec/${execId}/json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
