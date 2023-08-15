// types
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import type { FC } from 'react';

// cores
import { useNavigate } from '@umijs/max';
import { useRef } from 'react';

// components:vendors
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';

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
          <div>{record.RepoTags[0]?.split(':')[1]}</div>
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
    render: (_: unknown, record: { Created: string }) => {
      return (
        <div>
          <div>{record.Created}</div>
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
];

const ContainerList: FC = () => {
  const actionRef = useRef<ActionType>();
  const navigate = useNavigate();

  return (
    <PageContainer
      header={{
        title: '容器列表',
        breadcrumb: {},
      }}
    >
      <ProTable
        search={false}
        actionRef={actionRef}
        columns={columns}
        rowKey="Id"
        toolBarRender={() => [
          <Button
            key="1"
            type="primary"
            onClick={() => {
              navigate('/image/new');
            }}
          >
            新建
          </Button>,
        ]}
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
