import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    theme: {
      'primary-color': '#ff0000',
    },
  },

  access: {},
  model: {},
  initialState: {},
  request: {},
  mdx: {},
  proxy: {
    '/api': {
      target: 'http://localhost:2375/',
      changeOrigin: true,
      pathRewrite: { '^/api': '/v1.43' },
    },
  },
  layout: {
    title: 'iDocker',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'HomeOutlined',
    },
    {
      name: '容器',
      path: '/containers',
      component: './Containers',
      icon: 'SwitcherOutlined',
    },
    {
      name: '容器详情',
      path: '/containers/:id',
      component: './ContainerDetail',
      hideInMenu: true,
      icon: 'EditOutlined',
    },

    {
      name: '镜像',
      path: '/images',
      component: './Images',
      icon: 'PictureOutlined',
    },
    {
      name: '镜像搜索',
      path: 'image-search',
      component: './ImagesSearch',
      icon: 'SearchOutlined',
    },
    {
      name: '镜像详情',
      path: '/images/:id',
      component: './ImagesDetail',
      hideInMenu: true,
    },
    {
      name: '卷',
      path: '/volumes',
      component: './Volumes',
      icon: 'EditOutlined',
    },
    {
      name: '卷详情',
      path: '/volumes/:id',
      component: './VolumesDetail',
      hideInMenu: true,
      icon: 'SwapOutlined',
    },
    {
      name: '网络',
      path: '/networks',
      component: './Networks',
      icon: 'GlobalOutlined',
    },
    {
      name: '网络',
      path: '/networks/:id',
      component: './NetworksDetail',
      icon: 'GlobalOutlined',
      hideInMenu: true,
    },
    // {
    //   name: '集群',
    //   path: '/swarm',
    //   routes: [
    //     {
    //       name: '集群',
    //       path: '',
    //       component: './Swarm',
    //       exact: true,
    //     },
    //     {
    //       name: '节点',
    //       path: 'nodes',
    //       component: './SwarmNode',
    //     },
    //     {
    //       name: '服务',
    //       path: 'services',
    //       component: './SwarmService',
    //     },
    //     {
    //       name: '任务',
    //       path: 'tasks',
    //       component: './SwarmTasks',
    //     },
    //     {
    //       name: '秘密',
    //       path: 'secrets',
    //       component: './SwarmSecrets',
    //     },
    //     {
    //       name: '配置',
    //       path: 'config',
    //       component: './SwarmConfigs',
    //     },
    //     {
    //       name: '插件',
    //       path: 'plugin',
    //       component: './SwarmPlugins',
    //     },
    //   ]
    // },
  ],
  npmClient: 'pnpm',
});
