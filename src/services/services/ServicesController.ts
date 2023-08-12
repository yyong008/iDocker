import { request } from '@umijs/max';

export async function listServices(options?: { [key: string]: any }) {
  return request('/api/services', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function createService(
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request('/api/services/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function inspectService(
  serviceId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/services/${serviceId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function updateService(
  serviceId: string,
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request(`/api/services/${serviceId}/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteService(
  serviceId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/services/${serviceId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
