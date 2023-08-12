// types
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import type { FC } from 'react';

// cores
import { useRef } from 'react';

// components:vendors
import {
  ModalForm,
  PageContainer,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button, Space, message } from 'antd';

// services
import {
  createNetwork,
  deleteNetwork,
  queryNetworksList,
} from '@/services/networks/NetworkController';

//
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

//
import './index.css';
const ContainerList: FC = () => {
  const actionRef = useRef<ActionType>();

  const handleDelClick = async (name: string) => {
    const res: any = await deleteNetwork(name);
    if (typeof res && res === '') {
      message.success('删除成功');
      actionRef.current?.reload();
    } else {
      message.error('删除成功');
    }

    return true;
  };

  const onCreateNetworkFinish = async ({ name }: any) => {
    const res = await createNetwork({ name });

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
      title: '网络',
      dataIndex: 'Name',
      ellipsis: true,
      width: 200,
      render: (_: unknown, record: { Id: string; Name: string }) => {
        return (
          <div>
            <div>Id: {record.Id?.slice(0, 12)}</div>
            <div>名称：{record.Name}</div>
          </div>
        );
      },
    },
    {
      title: '驱动',
      dataIndex: 'Driver',
      ellipsis: true,
      width: 100,
    },
    {
      title: '作用域',
      dataIndex: 'Scope',
      ellipsis: true,
      width: 100,
    },
    {
      title: '启动ipv6',
      dataIndex: 'EnableIPv6',
      ellipsis: true,
      width: 100,
      render: (_: unknown, record: { EnableIPv6: boolean }) => {
        return <div>{record.EnableIPv6 ? 'Y' : 'N'}</div>;
      },
    },
    {
      title: '标签',
      dataIndex: 'Labels',
      ellipsis: true,
      render: (_: unknown, record: { Labels: any }) => {
        return (
          <div>
            {record.Labels?.['com.docker.compose.network'] ? (
              <div>
                network: {record.Labels?.['com.docker.compose.network']}
              </div>
            ) : null}
            {record.Labels?.['com.docker.compose.project'] ? (
              <div>
                protject: {record.Labels?.['com.docker.compose.project']}
              </div>
            ) : null}
            {record.Labels?.['com.docker.compose.version'] ? (
              <div>
                version: {record.Labels?.['com.docker.compose.version']}
              </div>
            ) : null}
          </div>
        );
      },
    },
    {
      title: '是否能在容器之间使用',
      dataIndex: 'EnableIPv6',
      ellipsis: true,
      width: 100,
      render: (_: unknown, record: { Ingress: boolean }) => {
        return <div>{record.Ingress ? 'Y' : 'N'}</div>;
      },
    },
    {
      title: '是否内网',
      dataIndex: 'EnableIPv6',
      ellipsis: true,
      width: 100,
      render: (_: unknown, record: { Internal: boolean }) => {
        return <div>{record.Internal ? 'Y' : 'N'}</div>;
      },
    },
    {
      title: 'IP 管理',
      dataIndex: 'IPAM',
      ellipsis: true,
      render: (_: unknown, record: { IPAM: { Config: any[] } }) => {
        return (
          <div>
            {record.IPAM.Config?.map((conf, index) => {
              return (
                <div key={index}>
                  <div>网关: {conf.Gateway}</div>
                  <div>子网: {conf.Subnet}</div>
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'IPAM',
      ellipsis: true,
      renderText(text, record) {
        return (
          <Space size="small">
            <Link to={`/networks/${record.Id}`}>
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
        title: '网络列表',
        breadcrumb: {},
      }}
    >
      <ProTable
        search={false}
        actionRef={actionRef}
        columns={columns}
        rowKey="Id"
        toolBarRender={() => [
          <ModalForm
            key="new"
            title="新建网络"
            layout="horizontal"
            trigger={
              <Button key="1" type="primary">
                新建网络
              </Button>
            }
            onFinish={onCreateNetworkFinish}
          >
            <ProFormText
              name="name"
              label="网络名"
              placeholder="请输入网络名称"
              style={{ marginTop: '20px' }}
              rules={[
                {
                  required: true,
                  message: '请输入',
                },
              ]}
            />
          </ModalForm>,
        ]}
        request={async () => {
          const data = await queryNetworksList();
          console.log('data', data);
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
