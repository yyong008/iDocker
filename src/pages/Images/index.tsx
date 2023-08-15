// types
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import type { FC } from 'react';

// cores
import { Link } from '@umijs/max';
import { useRef } from 'react';

// components:vendors
import {
  DeleteOutlined,
  FormOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';

// components
import CreateContainerModel from '@/components/createContainer';

// services
import { queryImagesList } from '@/services/images/ImagesController';

import './index.css';

const columns: ProColumns<any, any>[] = [
  {
    title: '镜像',
    dataIndex: 'RepoTags',
    ellipsis: true,
    render: (_: unknown, record: { RepoTags: any[]; Id: string }) => {
      return (
        <div>
          <div>{record.RepoTags[0]?.split(':')[0] ?? '未定义'}</div>
          <div>{record.Id.split(':')[1].slice(0, 12) ?? '未定义'}</div>
        </div>
      );
    },
  },
  {
    title: '版本',
    dataIndex: 'RepoTags',
    ellipsis: true,
    render: (_: unknown, record: { RepoTags: any[] }) => {
      return (
        <div>
          <Tag color="cyan">{record.RepoTags[0]?.split(':')[1]}</Tag>
        </div>
      );
    },
  },
  {
    title: '状态',
    dataIndex: 'RepoTags',
    ellipsis: true,
    render: (_: unknown, record: { RepoTags: any[] }) => {
      return (
        <div>
          <div>{record.RepoTags[0]?.split(':')[1]}</div>
        </div>
      );
    },
  },
  {
    title: '创建时间',
    dataIndex: 'Created',
    ellipsis: true,
    render: (_: unknown, record: { Created: number }) => {
      return (
        <div>
          <div>{new Date(record.Created * 1000).toISOString()}</div>
        </div>
      );
    },
  },
  {
    title: '使用的容器',
    dataIndex: 'Created',
    ellipsis: true,
    render: (_: unknown, record: { Containers: number }) => {
      return (
        <div>
          <div>{record.Containers}</div>
        </div>
      );
    },
  },
  {
    title: '尺寸',
    dataIndex: 'sizes',
    ellipsis: true,
    render: (
      _: unknown,
      record: { Size: number; SharedSize: number; VirtualSize: number },
    ) => {
      return (
        <div>
          <div>Size: {record.Size}</div>
          <div>SharedSize： {record.SharedSize}</div>
          <div>VirtualSize： {record.VirtualSize}</div>
        </div>
      );
    },
  },
  {
    title: '操作',
    dataIndex: 'sizes',
    ellipsis: true,
    render: (_: unknown, record: { Id: string }) => {
      const id = record.Id.slice(7);
      return (
        <Space>
          <CreateContainerModel
            name={record.Id.slice(7)}
            trigger={<PlaySquareOutlined />}
            portStr=""
            createContainer={() => {}}
          />
          <Link to={`/images/${id}`}>
            <Button type="text" icon={<FormOutlined />} shape="circle"></Button>
          </Link>
          <Button type="text" icon={<DeleteOutlined />} shape="circle"></Button>
        </Space>
      );
    },
  },
];

const ContainerList: FC = () => {
  const actionRef = useRef<ActionType>();

  return (
    <PageContainer
      header={{
        title: '镜像列表',
        breadcrumb: {},
      }}
    >
      <ProTable
        search={false}
        actionRef={actionRef}
        columns={columns}
        rowKey="Id"
        toolBarRender={() => {
          return [
            <Link key={'new'} to="/image-search">
              <Button type="primary">搜索镜像</Button>
            </Link>,
          ];
        }}
        request={async () => {
          const data = await queryImagesList();
          return {
            data: data,
            total: data.length,
            success: true,
          };
        }}
      />
    </PageContainer>
  );
};

export default ContainerList;
