import { PageContainer, ProCard, ProList } from '@ant-design/pro-components';

import { getInfo } from '@/services/Info/InfoController';

import { Alert, Col, Row, Space, Statistic } from 'antd';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import dockerAvatar from '../../assets/images/dockerfile.png';

const HomePage: React.FC = () => {
  const [data, setData] = useState<any>({});

  const queryInfo = async () => {
    const res = await getInfo();
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    queryInfo();
  }, []);

  return (
    <PageContainer ghost>
      <Alert
        banner
        style={{
          margin: -12,
          marginBottom: 24,
          padding: '0px 10px',
        }}
        message={
          <Marquee pauseOnHover gradient={false}>
            {data?.Warnings?.map((wn: string, index: number) => {
              return <div key={index}>⚠ {wn} </div>;
            })}
          </Marquee>
        }
      />
      <Space direction="vertical" style={{ width: '100%' }}>
        <ProCard>
          <Row gutter={16}>
            <Col span={6}>
              <Statistic title="容器数" value={data.Containers} />
            </Col>
            <Col span={6}>
              <Statistic
                title="运行中的容器数"
                value={data.ContainersRunning}
              />
            </Col>
            <Col span={6}>
              <Statistic title="已暂停的容器数" value={data.ContainersPause} />
            </Col>
            <Col span={6}>
              <Statistic title="停止的容器数" value={data?.ContainersStopped} />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Statistic title="镜像数" value={data.Images} />
            </Col>
            <Col span={6}>
              <Statistic title="内存大小" value={data.MemTotal} />
            </Col>
            <Col span={6}>
              <Statistic title="NCPU" value={data?.NCPU} />
            </Col>
            <Col span={6}>
              <Statistic title="Images" value={data.Images} />
            </Col>
          </Row>
          <div></div>
        </ProCard>
        <ProCard>
          <ProList
            rowKey="id"
            headerTitle={false}
            dataSource={[
              {
                id: 1,
                title: 'Architecture',
                image: dockerAvatar,
                desc: data.Architecture,
              },
              {
                id: 1,
                title: 'docker 根目录',
                image: dockerAvatar,
                desc: '/var/lib/docker',
              },
              {
                id: 2,
                title: 'docker ID',
                image: dockerAvatar,
                desc: data.ID,
              },
              {
                id: 3,
                title: '系统时间',
                image: dockerAvatar,
                desc: data.SystemTime,
              },
              {
                id: 4,
                title: 'docker 名字',
                image: dockerAvatar,
                desc: data.Name,
              },
              {
                id: 4,
                title: 'HttpProxy',
                image: dockerAvatar,
                desc: data.HttpProxy,
              },
              {
                id: 4,
                title: 'HttpsProxy',
                image: dockerAvatar,
                desc: data.HttpsProxy,
              },
              {
                id: 4,
                title: 'IndexServerAddress',
                image: dockerAvatar,
                desc: data.IndexServerAddress,
              },
              {
                id: 4,
                title: 'KernelVersion',
                image: dockerAvatar,
                desc: data.KernelVersion,
              },
              {
                id: 4,
                title: 'Plugin-Authorization',
                image: dockerAvatar,
                desc: data?.Plugins?.Authorization ?? '未知',
              },
              {
                id: 4,
                title: 'Plugin-Log',
                image: dockerAvatar,
                desc: data?.Plugins?.Log?.join(', ') ?? '未知',
              },
              {
                id: 4,
                title: 'Plugin-Volume',
                image: dockerAvatar,
                desc: data?.Plugins?.Volume?.join(', ') ?? '未知',
              },
              {
                id: 4,
                title: 'Plugin-Network',
                image: dockerAvatar,
                desc: data?.Plugins?.Network?.join(', ') ?? '未知',
              },
              {
                id: 4,
                title: 'LoggingDriver',
                image: dockerAvatar,
                desc: data?.LoggingDriver ?? '未知',
              },
              {
                id: 4,
                title: '存储驱动',
                image: dockerAvatar,
                desc: data?.Driver ?? '未知',
              },
            ]}
            metas={{
              title: {
                dataIndex: 'title',
              },
              avatar: {
                dataIndex: 'image',
                editable: false,
              },
              description: {
                dataIndex: 'desc',
              },
            }}
            showActions="hover"
          />
        </ProCard>

        <ProCard>
          <ProList
            rowKey="id"
            headerTitle={false}
            dataSource={[
              {
                id: 1,
                title: '是否限制内存',
                image: dockerAvatar,
                desc: data.MemoryLimit ? 'Y' : 'N',
              },
              {
                id: 1,
                title: 'IPv4Forwarding',
                image: dockerAvatar,
                desc: data.IPv4Forwarding ? 'Y' : 'N',
              },
              {
                id: 1,
                title: 'KernelMemoryTCP',
                image: dockerAvatar,
                desc: data.KernelMemoryTCP ? 'Y' : 'N',
              },
              {
                id: 1,
                title: 'LiveRestoreEnabled',
                image: dockerAvatar,
                desc: data.LiveRestoreEnabled ? 'Y' : 'N',
              },
              {
                id: 1,
                title: 'KernelMemoryTCP',
                image: dockerAvatar,
                desc: data.KernelMemoryTCP ? 'Y' : 'N',
              },
            ]}
            metas={{
              title: {
                dataIndex: 'title',
              },
              avatar: {
                dataIndex: 'image',
                editable: false,
              },
              description: {
                dataIndex: 'desc',
              },
            }}
            showActions="hover"
          />
        </ProCard>
      </Space>
    </PageContainer>
  );
};

export default HomePage;
