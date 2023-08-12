import { request } from '@umijs/max';

/** 获取镜像分发详细信息 */
export async function getImageDistributionDetail(
  imageName: string,
  options?: { [key: string]: any },
) {
  return request(`/api/v1.43/distribution/${imageName}/json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
