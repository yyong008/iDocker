import { request } from '@umijs/max';

export async function listNodes(options?: { [key: string]: any }) {
  return request('/api/nodes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function inspectNode(
  nodeId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/nodes/${nodeId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function updateNode(
  nodeId: string,
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request(`/api/nodes/${nodeId}/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteNode(
  nodeId: string,
  options?: { [key: string]: any },
) {
  return request(`/api/nodes/${nodeId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
