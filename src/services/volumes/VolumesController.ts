import { request } from '@umijs/max';

export async function queryVolumesList(params) {
  return request<any>('/api/volumes', {
    params,
    method: 'GET',
  });
}

export async function createVolume(
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request('/api/volumes/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getVolumeDetail(
  name: string,
  options?: { [key: string]: any },
) {
  return request(`/api/volumes/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function deleteVolume(
  name: string,
  options?: { [key: string]: any },
) {
  return request(`/api/volumes/${name}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function pruneUnusedVolumes(options?: { [key: string]: any }) {
  return request(`/api/volumes/prune`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
