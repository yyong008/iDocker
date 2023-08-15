// types
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import type { FC } from 'react';

// cores
import { Link } from '@umijs/max';
import { useRef, useState } from 'react';

// components:vendors
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';

// services
import {
  queryContainersList,
  startContainerById,
  stopContainerById,
} from '@/services/container/ContainerController';

import ContainerStatusIcon from '@/components/ContainerStatus';
import {
  DeleteOutlined,
  FormOutlined,
  PlaySquareOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';

import './index.css';

const ContainerList: FC = () => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);

  const handleStart = async (record: any) => {
    setLoading(true);
    const res = await startContainerById(record.Id);
    if (res === '') {
      message.success('开始成功');
    } else {
      message.error(res?.message || '开始失败');
    }
    actionRef.current?.reload();
    setLoading(false);
  };

  const handleStop = async (recrod: any) => {
    setLoading(true);
    const res = await stopContainerById(recrod.Id);

    if (res === '') {
      message.success('停止成功');
    } else {
      message.error(res.message || '停止失败');
    }

    actionRef.current?.reload();
    setLoading(false);
  };

  const handleContainerOp = async (recrod: any) => {
    if (recrod.State === 'running') {
      handleStop(recrod);
    } else {
      handleStart(recrod);
    }
  };

  const columns: ProColumns<any, any>[] = [
    {
      title: '容器名',
      dataIndex: 'ImageID',
      ellipsis: true,
      width: 200,
      render: (_: unknown, record: { Names: any[]; State: string }) => {
        return (
          <div style={{ display: 'flex' }}>
            <ContainerStatusIcon status={record.State as StatusMapKeys} />
            <div>
              {record.Names.map((n) => {
                return <div key={n}>{n}</div>;
              })}
            </div>
          </div>
        );
      },
    },
    {
      title: '镜像',
      dataIndex: 'ImageID',
      ellipsis: true,
      width: 150,
      render: (
        _: unknown,
        record: { Id: string; Names: any[]; ImageID: any; Image: any },
      ) => {
        return <div>{record.Image}</div>;
      },
    },
    {
      title: '状态',
      dataIndex: 'State',
      ellipsis: true,
      width: 100,
    },
    {
      title: '端口',
      dataIndex: 'NetworkSettings',
      ellipsis: true,
      width: 100,
      render: (_: unknown, record: { Ports: any[] }) => {
        return (
          <div>
            {record.Ports.map((p, index) => {
              const dom = (
                <div>
                  {p.Type}/{p.IP ?? '-'}/{p.PublicPort ?? '-'}/
                  {p.PrivatePort ?? '-'}
                </div>
              );
              return (
                <div key={index}>
                  {p.PublicPort && p.PrivatePort ? (
                    <a
                      target="_blank"
                      href={`http://${p.IP}:${p.PublicPort}`}
                      rel="noreferrer"
                    >
                      {dom}
                    </a>
                  ) : (
                    dom
                  )}
                </div>
              );
            })}
          </div>
        );
      },
    },

    {
      title: '状态信息',
      dataIndex: 'Status',
      ellipsis: true,
      width: 100,
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      ellipsis: true,
      width: 100,
      render: (
        _: unknown,
        record: { createdAt: string; [index: string]: any },
      ) => {
        return <div>{new Date(record.Created * 1000).toLocaleString()}</div>;
      },
    },
    {
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 200,
      render: (_: unknown, record: { Id: string; [index: string]: any }) => {
        return (
          <Space size="small">
            <div
              onClick={() => {
                handleContainerOp(record);
              }}
            >
              {record.State === 'running' && (
                <Button
                  type="text"
                  icon={<PoweroffOutlined />}
                  shape="circle"
                ></Button>
              )}
              {record.State !== 'running' && (
                <Button
                  type="text"
                  icon={<PlaySquareOutlined />}
                  shape="circle"
                ></Button>
              )}
            </div>
            <Link to={`/containers/${record.Id}`}>
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
            ></Button>
          </Space>
        );
      },
    },
  ];

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
        loading={loading}
        toolBarRender={() => {
          return [
            <Link key={'new'} to="/images">
              <Button type="primary">从镜像创建容器</Button>
            </Link>,
          ];
        }}
        request={async () => {
          const data = await queryContainersList({
            all: true,
          });
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
