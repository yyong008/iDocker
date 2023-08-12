import { request } from '@umijs/max';

/** 创建新的 Docker 会话 */
export async function createDockerSession(options?: { [key: string]: any }) {
  return request('/api/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
