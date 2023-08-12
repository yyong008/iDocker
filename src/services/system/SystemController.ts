import { request } from '@umijs/max';

/** 获取 Docker 信息 */
export async function getDockerInfo(options?: { [key: string]: any }) {
  return request('/api/system/info', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 获取 Docker 版本信息 */
export async function getDockerVersion(options?: { [key: string]: any }) {
  return request('/api/system/version', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 获取 Docker 事件列表 */
export async function getDockerEvents(options?: { [key: string]: any }) {
  return request('/api/system/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** Ping Docker 服务器 */
export async function pingDockerServer(options?: { [key: string]: any }) {
  return request('/api/system/ping', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 获取 Docker 系统 df 信息 */
export async function getDockerDfInfo(options?: { [key: string]: any }) {
  return request('/api/system/df', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 清理未使用的数据 */
export async function pruneUnusedData(options?: { [key: string]: any }) {
  return request('/api/system/prune', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
