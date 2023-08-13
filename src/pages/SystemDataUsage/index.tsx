import { useEffect, useState } from 'react';

import { PageContainer, ProCard } from '@ant-design/pro-components';

import { getDockerDfInfo } from '@/services/system/SystemController';
import { Segmented } from 'antd';
import ReactJson from 'react-json-view';

const VolumesData = ({ data }: any) => {
  return (
    <ProCard>
      <ReactJson src={data ?? {}} theme="monokai" />
    </ProCard>
  );
};

const VolumesDetail: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [type, setType] = useState<string>('镜像');
  const [loading, setLoading] = useState(false);

  const queryDfInfo = async () => {
    setLoading(true);
    const res = await getDockerDfInfo();
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    queryDfInfo();
  }, []);

  return (
    <PageContainer ghost loading={loading}>
      <Segmented
        options={['镜像', '容器', '卷', '构建缓存']}
        onChange={(type: string) => {
          setType(type);
          return;
        }}
        style={{
          marginBottom: 16,
        }}
      />
      <div>
        {type === '镜像' && <VolumesData data={data.Images} />}
        {type === '容器' && <VolumesData data={data.Containers} />}
        {type === '卷' && <VolumesData data={data.Volumes} />}
        {type === '构建缓存' && <VolumesData data={data.BuildCache} />}
      </div>
    </PageContainer>
  );
};

export default VolumesDetail;
