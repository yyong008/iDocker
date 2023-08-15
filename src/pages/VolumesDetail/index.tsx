import { useParams } from '@umijs/max';

import { useEffect, useState } from 'react';

import {
  PageContainer,
  ProCard,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';

import { queryContainersList } from '@/services/container/ContainerController';
import { Segmented } from 'antd';
import ReactJson from 'react-json-view';

function Containers({ data }) {
  const columns: ProColumns<any, any>[] = [
    {
      title: '容器-镜像',
      dataIndex: 'ImageID',
      ellipsis: true,
      render: (
        _: unknown,
        record: { Id: string; Names: any[]; ImageID: any; Image: any },
      ) => {
        return (
          <div>
            <div>容器Id：{record.Id}</div>
            <div>
              <div>容器名：</div>
              {record.Names.map((n) => {
                return <div key={n}>{n}</div>;
              })}
            </div>
            <div>镜像名：{record.Image}</div>
            <div>镜像 ID：{record.ImageID}</div>
          </div>
        );
      },
    },
    {
      title: '挂载',
      dataIndex: 'Mounts',
      ellipsis: true,

      render: (_: unknown, record: { Mounts: any }) => {
        return (
          <div>
            {record.Mounts.map((m, index) => {
              return (
                <div key={index}>
                  <div>{m.Name}</div>
                  <div>{m.Destination}</div>
                  <div>{m.Driver}</div>
                  <div>{m.Mode}</div>
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      title: '网络设置',
      dataIndex: 'NetworkSettings',
      ellipsis: true,
      render: (_: unknown, record: { NetworkSettings: any }) => {
        const dd = record.NetworkSettings.Networks.docker_default;

        return (
          <div className="data-container">
            <div>
              <label>别名:</label> <span>{dd?.Aliases}</span>
            </div>
            <div>
              <label>驱动选项:</label> <span>{dd?.DriverOpts}</span>
            </div>
            <div>
              <label>终端点 ID:</label> <span>{dd?.EndpointID}</span>
            </div>
            <div>
              <label>网关:</label> <span>{dd?.Gateway}</span>
            </div>
            <div>
              <label>全局 IPv6 地址:</label>{' '}
              <span>{dd?.GlobalIPv6Address}</span>
            </div>
            <div>
              <label>全局 IPv6 前缀长度:</label>{' '}
              <span>{dd?.GlobalIPv6PrefixLen}</span>
            </div>
            <div>
              <label>IPAM 配置:</label> <span>{dd?.IPAMConfig}</span>
            </div>
            <div>
              <label>IP 地址:</label> <span>{dd?.IPAddress}</span>
            </div>
            <div>
              <label>IP 前缀长度:</label> <span>{dd?.IPPrefixLen}</span>
            </div>
            <div>
              <label>IPv6 网关:</label> <span>{dd?.IPv6Gateway}</span>
            </div>
            <div>
              <label>链接:</label> <span>{dd?.Links}</span>
            </div>
            <div>
              <label>物理地址:</label> <span>{dd?.MacAddress}</span>
            </div>
            <div>
              <label>网络 ID:</label> <span>{dd?.NetworkID}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: '端口',
      dataIndex: 'NetworkSettings',
      ellipsis: true,
      render: (_: unknown, record: { Ports: any[] }) => {
        return (
          <div>
            {record.Ports.map((p, index) => {
              return (
                <div key={index}>
                  <div>
                    {p.Type}/{p.IP ?? '-'}/{p.PublicPort ?? '-'}/{p.PrivatePort}
                  </div>
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      title: '状态',
      dataIndex: 'State',
      ellipsis: true,
      render: (_: unknown, record: { State: any; Status: string }) => {
        return (
          <div>
            <div>{record.State}</div>
            <div>{record.Status}</div>
          </div>
        );
      },
    },

    {
      title: '创建时间',
      dataIndex: 'createdAt',
      ellipsis: true,
      render: (
        _: unknown,
        record: { createdAt: string; [index: string]: any },
      ) => {
        return <div>{new Date(record.Created * 1000).toLocaleString()}</div>;
      },
    },
  ];

  return (
    <ProTable search={false} columns={columns} dataSource={data} rowKey="Id" />
  );
}

const VolumesData = ({ data }) => {
  return (
    <ProCard>
      <ReactJson src={data ?? {}} theme="monokai" />
    </ProCard>
  );
};

const VolumesDetail: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [type, setType] = useState<string>('容器');

  // 获取参数
  const { id } = useParams();

  const queryInfo = async () => {
    const res = await queryContainersList({ volume: id });
    setData(res);
  };

  useEffect(() => {
    queryInfo();
  }, []);

  return (
    <PageContainer ghost>
      <Segmented
        options={['容器', '数据']}
        onChange={(type: string) => {
          return setType(type);
        }}
        style={{
          marginBottom: 16,
        }}
      />
      <div>
        {type === '容器' && <Containers data={data} />}
        {type === '数据' && <VolumesData data={data} />}
      </div>
    </PageContainer>
  );
};

export default VolumesDetail;
