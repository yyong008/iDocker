import { PageContainer, ProCard } from '@ant-design/pro-components';

import { useParams } from '@/.umi/exports';
import {
  getContainerDetail,
  getContainerHistory,
} from '@/services/container/ContainerController';
import { Segmented } from 'antd';
import { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LayerList = ({ data }: { data: any[] }) => {
  return <div>This is Data</div>;
};

const HomePage: React.FC = () => {
  const [type, setType] = useState<string>('JSON');
  const [data, setData] = useState({});
  const [hData, setHData] = useState([]);

  const { id } = useParams();

  const queryInfo = async () => {
    const res = await getContainerDetail(id);
    console.log(res);
    setData(res);
  };

  const getHistory = async () => {
    const res = await getContainerHistory(id);
    console.log(res);
    setHData(res);
  };

  useEffect(() => {
    queryInfo();
  }, []);

  return (
    <PageContainer ghost>
      <Segmented
        options={['JSON', '数据']}
        onChange={async (type: string) => {
          if (type === '数据' && hData.length <= 0) {
            await getHistory();
          }
          setType(type);
        }}
        style={{
          marginBottom: 16,
        }}
      />
      <ProCard>
        {type === 'JSON' && <ReactJson src={data ?? {}} />}
        {type === '数据' && <LayerList data={hData ?? []} />}
      </ProCard>
    </PageContainer>
  );
};

export default HomePage;
