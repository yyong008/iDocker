// types
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import type { FC } from 'react';

// cores
import { Link } from '@umijs/max';
import { useRef } from 'react';

// components:vendors
import {
  ModalForm,
  PageContainer,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';

// services
import {
  createVolume,
  deleteVolume,
  queryVolumesList,
} from '@/services/volumes/VolumesController';

import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import './index.css';

const ContainerList: FC = () => {
  const actionRef = useRef<ActionType>();

  const handleDelClick = async (name: string) => {
    const res: any = await deleteVolume(name);
    if (typeof res && res === '') {
      message.success('删除成功');
      actionRef.current?.reload();
    } else {
      message.error('删除成功');
    }

    return true;
  };

  const onCreateVolFinish = async (values: any) => {
    const res: any = await createVolume(values);
    if (typeof res && res === '') {
      message.success('创建成功');
      actionRef.current?.reload();
    } else {
      message.error('创建失败');
    }
    return true;
  };

  const columns: ProColumns<any, any>[] = [
    {
      title: '卷名字',
      dataIndex: 'ImageID',
      ellipsis: true,
      width: 150,
      render: (_: unknown, record: { Name: string }) => {
        return (
          <div>
            <div>容器Id：{record.Name?.slice(0, 12)}</div>
          </div>
        );
      },
    },
    {
      title: '挂载点',
      dataIndex: 'Mountpoint',
      ellipsis: true,
      width: 300,
    },
    {
      title: '创建时间',
      dataIndex: 'CreatedAt',
      ellipsis: true,
      width: 200,
    },
    {
      title: '驱动类型',
      dataIndex: 'Driver',
      ellipsis: true,
      width: 100,
    },
    {
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 200,
      render: (_: unknown, record: { Name: string }) => {
        return (
          <Space size="small">
            <Link to={`/volumes/${record.Name}`}>
              <Button
                type="text"
                icon={<FormOutlined />}
                shape="circle"
              ></Button>
            </Link>
            <Button
              type="text"
              icon={<DeleteOutlined />}
              shape="circle"
              onClick={() => {
                handleDelClick(record.Name);
              }}
            ></Button>
          </Space>
        );
      },
    },
  ];

  return (
    <PageContainer
      header={{
        title: '卷列表',
        breadcrumb: {},
      }}
    >
      <ProTable
        search={false}
        actionRef={actionRef}
        columns={columns}
        rowKey="Name"
        toolBarRender={() => [
          <ModalForm
            key="new"
            title="新建卷"
            layout="horizontal"
            trigger={
              <Button key="1" type="primary">
                新建卷
              </Button>
            }
            onFinish={onCreateVolFinish}
          >
            <ProFormText
              name="name"
              label="卷名"
              placeholder="请输入卷名称"
              rules={[
                {
                  required: true,
                  message: '请输入',
                },
              ]}
            />
          </ModalForm>,
        ]}
        request={async (...args) => {
          console.log('args', args);
          const data = await queryVolumesList({
            name: args[0].ImageID,
            filters: JSON.stringify({ name: [args[0].ImageID] }),
          });

          console.log('data', data);
          return {
            data: data?.Volumes.sort(
              (a: any, b: any) => b.CreatedAt - a.CreatedAt,
            ),
            total: data.length,
            success: true,
          };
        }}
      />
    </PageContainer>
  );
};

export default ContainerList;
