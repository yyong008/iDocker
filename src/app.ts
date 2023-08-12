// 运行时配置
import { RuntimeAntdConfig, RunTimeLayoutConfig } from '@umijs/max';
import { theme } from 'antd';
import logo from './assets/docker.png';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'iDocker' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo,
    menu: {
      locale: false,
    },
    layout: 'mix',
    // 默认布局调整
    // rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    menuHeaderRender: undefined,
  };
};

export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme ??= {};
  memo.theme.algorithm = theme.darkAlgorithm; // 配置 antd5 的预设 dark 算法
  memo.theme.token = {
    colorPrimary: '#276FDB', // 配置 antd5 的预讥主题
  };

  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 3,
    },
  };

  return memo;
};
