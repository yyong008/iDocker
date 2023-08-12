/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 列出所有镜像  */
export async function queryImagesList() {
  return request<any>('/api/images/json', {
    method: 'GET',
  });
}

/** 创建新镜像 */
export async function createImage(
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request('/api/images/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 从指定来源创建镜像 */
export async function pushImage(
  name: string,
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request(`/api/images/${name}/push`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 从归档文件中加载镜像 */
export async function loadImage(
  id: string,
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request(`/api/images/load`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 从归档文件中加载镜像 */
export async function getImageDetail(
  name: string,
  options?: { [key: string]: any },
) {
  return request(`/api/images/${name}/json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 查看镜像历史记录 */
export async function getImageHistory(
  name: string,
  options?: { [key: string]: any },
) {
  return request(`/api/images/${name}/history`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 删除指定镜像 */
export async function delmageByName(
  name: string,
  options?: { [key: string]: any },
) {
  return request(`/api/images/${name}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 清除未使用镜像 */
export async function pruneNoUseImage(options?: { [key: string]: any }) {
  return request(`/api/images/search`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 搜索 Docker Hub 上的镜像 */
export async function searchImage(
  params: any,
  options?: { [key: string]: any },
) {
  return request(`/api/images/search`, {
    params,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 搜索 Docker Hub 上的镜像 */
export async function addTagForImage(
  body: any,
  name: any,
  options?: { [key: string]: any },
) {
  return request(`/api/images/${name}/tag`, {
    body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
