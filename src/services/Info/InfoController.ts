/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

export async function getInfo() {
  return request(`/api/info`, {
    method: 'GET',
  });
}
