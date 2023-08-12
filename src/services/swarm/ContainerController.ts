/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 列出所有容器  */
export async function queryContainersList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/containers/json', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建新容器 */
export async function createContainer(
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request('/api/containers/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启动容器 */
export async function startContainerById(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/start`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 停止容器 */
export async function stopContainerById(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/stop`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 重启容器 */
export async function restartContainerById(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/restart`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 杀死容器 */
export async function killContainerById(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/kill`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除容器 */
export async function delContainerById(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function getContainerDetail(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/json`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**查看容器文件系统变更 */
export async function getContainerChanges(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/changes`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**获取容器统计信息 */
export async function getContainerStats(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/stats`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**导出容器文件系统内容 */
export async function getContainerExport(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/export`, {
    method: 'GET',
    ...(options || {}),
  });
}

/**上传文件到容器 */
export async function getContainerCopy(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/copy`, {
    method: 'POST',
    ...(options || {}),
  });
}

/**执行命令或者脚本 */
export async function getContainerExec(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/exec`, {
    method: 'POST',
    ...(options || {}),
  });
}

/**获取容器日志流 */
export async function getContainerLogs(
  id: string,
  options?: { [key: string]: any },
) {
  return request(`/api/containers/${id}/exec`, {
    method: 'GET',
    ...(options || {}),
  });
}
